require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const { Todo } = require('./db/models');

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan('dev'))
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/api/todos', async (req, res) => {
    try {
      const todos = await Todo.findAll({ order: [
        ['id', 'ASC'],
    ],
});
      if (!todos) {
        res.sendStatus(400);
      } else {
        res.json(todos);
      }
    } catch (err) {
      console.error(err);
    }
  });
  
  server.post('/api/todos', async (req, res) => {
    try {
      const { title } = req.body;
      const todo = await Todo.create({ title, user_id: 1, status: false });
      if (todo) {
        res.json(todo);
      } else {
        res.sendStatus(400);
      }
    } catch (err) {
      console.error(err);
    }
  });

  server.patch('/api/todos/:id', async (req, res) => {
    const {id} = req.params;
    // const {title} = req.body;
    console.log(req.body);
    await Todo.update(req.body, { where: {id} })
    res.sendStatus(200);
  });

  server.delete('/api/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;
    // console.log(todoId)
    //   const { id } = req.params;
    await Todo.destroy({ where: { id: todoId } });
    res.sendStatus(200);
  });

  server.patch('/api/todos/checked/:todoId', async(req, res) => {
    const { todoId } = req.params;
    const todo = await Todo.findByPk(todoId);
    await Todo.update({status: !todo.status}, { where: { id:todoId} });
    res.sendStatus(200);
  });

server.listen(PORT, () => {
    console.log('Server start on port ', PORT)
});