/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[]
  }
  add(todo){
    this.todos.push(todo)
  }
  remove(indexOfTodo){
    if(indexOfTodo<this.todos.length){
      this.todos.slice(index,1)
    }
    else{
      throw new Error("Unable to remove.todo not present")
    }
  }
  update(index, updatedTodo){
    if(index<this.todos.length){
      this.todos[index]=updatedTodo
    }
    else{
      throw new Error("Unable to update.todo not present")
    }
  }
  getAll(){
    return this.todos
  }
  clear(){
    this.todos=[]
  }
  get(indexOfTodo){
    if(indexOfTodo<this.todos.length){
      return this.todos[indexOfTodo]
    }
    else{
      throw new Error("todo not present")
    }
  }
}

module.exports = Todo;
