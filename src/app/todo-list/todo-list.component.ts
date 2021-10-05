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

  deleteTask(descriptionIndexToDelete: number): void {
    if (
      descriptionIndexToDelete < 0 ||
      descriptionIndexToDelete >= this.tasks.length
    ) {
      return;
    }

    this.tasks = [
      ...this.tasks.slice(0, descriptionIndexToDelete),
      ...this.tasks.slice(descriptionIndexToDelete + 1),
    ];
  }
}
