require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { Task } = require('./db/models');

const PORT = process.env.PORT ?? 3001;

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/api/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

server.listen(PORT, () => {
  console.log('Server start on port ', PORT);
});
