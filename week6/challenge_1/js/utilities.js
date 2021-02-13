import todos from 'toDos.js';


const myTodos = new todos('todos');
window.addEventListener('load', () => {
  myTodos.countTodos();
});
