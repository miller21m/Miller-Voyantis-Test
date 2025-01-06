# Miller-Voyantis-Test
Voyantis test for full stack position 
Queue Management Application

This project consists of two parts:

Backend: A Node.js server running on http://localhost:5000.

Frontend: A React.js application running on http://localhost:3000.

How to Run the Application

Backend

Navigate to the backend folder in your terminal:

cd backend

Install the dependencies:

npm install

Start the backend server:

npm start

The server will run on http://localhost:5000.

Frontend

Navigate to the frontend folder in your terminal:

cd frontend

Install the dependencies:

npm install

Start the frontend application:

npm start

The frontend will run on http://localhost:3000.

Features

Render Queues: Displays all available queues and the number of messages in each queue.

Message Management:

Add a message to a specific queue.

Retrieve the next message from a queue.

Notes

Hardcoded Data: For demonstration purposes, the backend includes hardcoded data for responses to the client.

Proxy Configuration: The frontend is configured to proxy API requests to the backend at http://localhost:5000. Ensure both the backend and frontend are running simultaneously.

Endpoints

Backend Endpoints

POST /api/:queue_name

Adds a new message to the specified queue.

GET /api/:queue_name

Retrieves the next message from the specified queue. Returns 204 if the queue is empty.

GET /api/queues

Returns a summary of all queues and the number of messages in each.

