import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from './todo.item';

/*export interface Todo {
  title: string;
  description: string;
  dueDate: string;
  id: number;
  priority: string;
  isDone: boolean;
}*/

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public todos: Todo[];

  constructor(private storage: Storage) {
    this.storage.get('todolist')
    .then(data => {
      if(!data) {
        this.storage.set('todolist', []).then(savedList => {
          this.todos = savedList;
        });
      } else {
        this.todos = data;
      }
    });

   }

  public getTodos(): Todo[] {
    return this.todos;
  }

  public getTodo(id: string): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  public editTodo(id: string, todo: Todo) {
    let update = this.todos.find(todo => todo.id === id);
    update.title = todo.title;
    update.dueDate = todo.dueDate;
    update.priority = todo.priority;
    update.description = todo.description;
    this.saveStorage();
  }

  public addTodo(title: string, dueDate: string, priority: string, description: string): void {
    let newTodo = new Todo(title, dueDate, priority, description);
    this.todos.push(newTodo);
    this.storage.set('todolist', this.todos);
  }

  public reOrder(orderedTodos : Todo[]): void {
    this.todos = orderedTodos;
    this.storage.set('todolist', this.todos);
  }

  public removeTodo(id: string): void {
    this.todos = this.todos.filter(todo =>{
      return todo['id'] !== id;
    });
    this.storage.set('todolist', this.todos);
  }

  public doneTodo(id: string): void {
    this.todos.find(todo => todo.id === id).isDone = true;
    this.saveStorage();
  }

  private saveStorage() {
    this.storage.set('todolist', this.todos);
  }

}