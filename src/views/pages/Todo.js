"use strict";

import Utils from '../../services/Utils.js';

const Todo = {
    render: async () => {
        let view =     `<main class="todo has-background-black has-text-white p-3" style="min-width:600px;margin-top:90px;>
        <div class="title">
            <hr class="title-hr" />
            <h1 class="has-text-white">ToDo<span class="light-weight">List</span></h1>
            <hr class="title-hr" />
        </div>
        <ul class="todo-list has-text-black has-background-black mb-3"></ul>
        <label for="todoDescription" class="description">
            <input id="todoDescription" class="has-text-black" style=";min-width:200px;" placeholder="Ajouter une nouvelle tâche"/>
            <a class="add-todo">
            <img style="max-width:15px" src="views/components/images/add-button.svg" title="Ajouter une nouvelle tâche" />
            </a>
        </label>
        </main>`
        return view
    }, after_render : async ()=> {
        let todosCollection = JSON.parse(localStorage.getItem('todoStorage')) || [];
        const renderTodo = (todo) => {
            const defaultDeleteButtonImage = './views/components/images/delete-button.svg';
            const redDeleteButtonImage = 'views/components/images/red-delete-button.svg';
        
            const todoHtml = `
              <li class="is-flex mb-2 has-background-white todo-item ${todo.isDone ? 'toggled' : 'untoggled'}" data-key="${todo.id}">
                <div id="${todo.id}" class="label m-0 ml-3 is-flex">
                  <input id="${todo.id}" type="checkbox"/>  
                  <span class="has-text-black mr-3 ml-3">${todo.description}</span>
                </div>
                <a class="delete-todo is-flex" value="${todo.id}">
                  <img style="max-width:20px" src="${todo.isDone ? redDeleteButtonImage : defaultDeleteButtonImage}" title="Supprimer cette tâche."/>
                </a>
              </li>
            `;
        
            document.querySelector('.todo-list').insertAdjacentHTML('beforeend', todoHtml);
        
            var item = document.querySelector(`li[data-key="${todo.id}"]`);
            if (item) {
              document.querySelector(`div[id="${todo.id}"]`).addEventListener('click', function toggleOnClick() {
                // CSS Toggle/Untoggle
        
                item.classList.toggle('toggled');
                let toggledImgElement = document.querySelector(`.toggled[data-key="${todo.id}"] a img`);
                if (toggledImgElement) {
                  toggledImgElement.src = redDeleteButtonImage;
                } else {
                  document.querySelector(`a[value="${todo.id}"] img`).src = defaultDeleteButtonImage;
                }
        
                updateTodoStatus(todo);
              });
            }
        
            document
              .querySelector(`a[value="${todo.id}"]`)
              .addEventListener('click', function deleteOnClick() {
                deleteTodo(todo.id);
              });
          }
    

    
    
        const updateTodoStatus = (todo) => {
            const index = todosCollection.indexOf(todo);
            todosCollection[index].isDone = !todo.isDone;
            localStorage.setItem('todoStorage', JSON.stringify(todosCollection));
        }
    
        const saveTodo = (todo) =>{
            todosCollection.push(todo);
            localStorage.setItem('todoStorage', JSON.stringify(todosCollection));
        }
    
        const addTodo = (todoDescription)  => {
            const todo = {
            description: todoDescription,
            isDone: false,
            id: Date.now(),
            };
    
            saveTodo(todo);
            renderTodo(todo);
        }
    
        const deleteTodo = (id)=>  {
            todosCollection = todosCollection.filter( (todo) =>  !(todo.id == id));
            localStorage.setItem('todoStorage', JSON.stringify(todosCollection));
    
            const elementToBeDeleted = document.querySelector(`[data-key='${id}']`);
            elementToBeDeleted.remove();
        }
    
        const loadTodos = () => (todosCollection) && todosCollection.forEach(todo => renderTodo(todo));
        
    
    
    
            loadTodos();
    
            document
            .querySelector('.add-todo')
            .addEventListener('click', function addOnClick() {
                createTodo();
            });
    
            document
            .querySelector('#todoDescription')
            .addEventListener('keyup', function addOnKeyup(event) {
                (event.key == 'Enter') &&  (createTodo(),this.value = '');
                
            });
    
    
            //* **************************
    
            const createTodo = () =>{
                let todoDescription = document.querySelector('#todoDescription').value;
                todoDescription = Utils.sanitizeInput(todoDescription);
                if (todoDescription != '' && /^(?=.{1,20}$).*/.test(todoDescription)) {
                    addTodo(todoDescription);
                }
            }
        
    }
}

export default Todo;