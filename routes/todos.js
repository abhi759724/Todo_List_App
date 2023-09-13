const express = require("express");

// create the instance of the router
const router = express.Router();

// // import controller
const { createTodo } = require("../controllers/createToDO");
const { deleteTodo } = require("../controllers/deleteTodo");

// // map/add the controller
router.post("/createTodo", createTodo);
router.delete("/deleteTodo:id", deleteTodo);

// render on browser

const todo = require("../models/todo");
const todoList = [
  {
    description: "basketball",
    dueDate: "12 nov 2023",
  },
];

router.get("/", (req, res) => {
  todo
    .find({})
    .exec()
    .then((todoList) => {
      res.render("index", {
        title: "Todo List",
        todo_list: todoList,
      });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// export the route
module.exports = router;
