const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { getAsync } = require('./redis');

const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/todos', todosRouter);

/* GET statistic of existings todos */
app.get('/statistics', async (_, res) => {
  // Get todos count from Redis
  const todosCount = await getAsync('added_todos');
  
  // If no todos in Redis, return 0
  if (!todosCount) {
    return res.send({ added_todos: 0 });
  }
  
  res.send({ added_todos: parseInt(todosCount) });
});

module.exports = app;
