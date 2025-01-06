const express = require('express');
const router = express.Router();

const queuesController = require('../controllers/queues');

// POST /api/:queue_name
router.post('/:queue_name', queuesController.addMessageToQueue);

router.get('/queues', queuesController.getAllQueues);

// GET /api/:queue_name
router.get('/:queue_name', queuesController.getNextMessageFromQueue);

module.exports = router;