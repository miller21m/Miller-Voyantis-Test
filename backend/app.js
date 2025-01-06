const express = require('express');
const bodyParser = require('body-parser');
const queuesRoutes = require('./routes/queues');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', queuesRoutes);

app.listen(5000, () => {
  console.log('Server running');
});