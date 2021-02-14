// Code to keep in Main JS
import ToDos from './ToDos.js';
const myToDoList = new ToDos('todo');
window.addEventListener('load', () => {
  myToDoList.showToDoList();
  myToDoList.addTabListeners();
});

const inputField = document.getElementById('new_task');
const addNew = document.getElementById('addnew');


inputField.addEventListener('keyup', function(event) {
  if(event.keyIdentifier !== undefined) {
    event.preventDefault();
    addNew.click();
  }
});

addNew.addEventListener('click', () => {
  myToDoList.addToDo();
});


