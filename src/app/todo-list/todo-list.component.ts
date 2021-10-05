import { Component } from '@angular/core';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: TodoItem[];

  constructor() {
    this.tasks = [
      { description: 'Arrumar a cama', done: true },
      { description: 'Fazer o trabalho prático do bootcamp', done: false },
    ];
  }

  addTask(description: string): void {
    if (this.isNotAValidDescription(description)) {
      return;
    }

    this.tasks = [
      ...this.tasks,
      {
        description: description.trim(),
        done: false,
      },
    ];
  }

  private isNotAValidDescription(aDescription: string): boolean {
    return (
      aDescription === null ||
      aDescription === undefined ||
      aDescription.trim() === ''
    );
  }
}
