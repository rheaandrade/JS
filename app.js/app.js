angular.module("todoApp", []) //Start of the funtion
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
    { name: "Go to school", done: false }, // part of the prewrittrn so as to give examples
    { name: "Eat lunch", done: false }, // part of the prewrittrn so as to give examples
    { name: "Do laundry", done: false }, // part of the prewrittrn so as to give examples
    { name: "Buy materials for project", done: false } // part of the prewrittrn so as to give examples
  ]

  todoList.addTodo = function() { // adding list items
    todoList.todoItems.push(
      { name: todoList.todoText, done: false }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() { // removing list items
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  todoList.remaining = function() { // remaing on the list
    var notCompletedCount = 0;
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done ? 0 : 1;
    })

    return notCompletedCount
  }


}); // end TodoListController

