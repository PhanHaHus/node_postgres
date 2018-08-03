const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
};