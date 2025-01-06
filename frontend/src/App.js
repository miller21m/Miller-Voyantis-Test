import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [queues, setQueues] = useState({});
  const [selectedQueue, setSelectedQueue] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Fetch all queues and their message counts
    const fetchQueues = async () => {
      try {
        const response = await axios.get('/api/queues'); // Backend endpoint to fetch all queues
        console.log(response);
        setQueues(response.data);
      } catch (error) {
        console.error('Error fetching queues:', error);
      }
    };

    fetchQueues();
  }, []);

  const handleQueueSelection = (queueName) => {
    setSelectedQueue(queueName);
  };

  const handleFetchMessage = async () => {
    if (!selectedQueue) {
      alert('Please select a queue.');
      return;
    }

    try {
      console.log(selectedQueue);
      const response = await axios.get(`/api/${selectedQueue}`);
      if (response.status === 204) {
        setMessage('No messages in the queue.');
      } else {
        setMessage(response.data);
      }
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Queue Management</h1>
      </header>

      <main className="main">
        <div className="queues">
          <h2>Available Queues</h2>
          <ul>
            {Object.keys(queues).map((queueName) => (
              <li key={queueName} onClick={() => handleQueueSelection(queueName)}>
                {queueName} ({queues[queueName].length} messages)
              </li>
            ))}
          </ul>
        </div>

        <div className="actions">
          <button onClick={handleFetchMessage}>Go</button>
        </div>

        <div className="message">
          <h2>Message:</h2>
          <p>{message ? JSON.stringify(message) : 'Select a queue and click Go to fetch a message.'}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
