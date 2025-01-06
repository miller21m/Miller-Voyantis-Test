// For testing 
const queues = {
  "FirstMessage": {
    "length": 2
  },
  "SecondMessage": {
    "length": 1
  }
}; // Store messages by queue name

exports.addMessageToQueue = async (req, res, next) => {
  const queueName = req.params.queue_name;
  const message = req.body;

  if (!queues[queueName]) {
    queues[queueName] = [];
  }

  queues[queueName].push(message);
  res.status(201).send({ message: 'Message added to queue.' });
}

exports.getNextMessageFromQueue = async (req, res) => {
  const queueName = req.params.queue_name;
  const timeout = parseInt(req.query.timeout) || 10000;

  if (!queues[queueName] || queues[queueName].length === 0) {
    await new Promise(resolve => setTimeout(resolve, timeout));
    if (!queues[queueName] || queues[queueName].length === 0) {
      return res.status(204).send();
    }
  }

  const message = queues[queueName];
  res.status(200).send(message);
}

exports.getAllQueues = (req, res, next) => {
  console.log('Get getAllQueues ');
  const queueSummary = Object.keys(queues).reduce((summary, queueName) => {
    summary[queueName] = { length: queues[queueName].length };
    return summary;
  }, {});

  res.status(200).send(queueSummary);
}