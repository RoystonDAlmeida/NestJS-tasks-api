// Services are used to handle business logic
// They are decorated with @Injectable decorator
// Service command: nest g service tasks
// Methods are defined in service to handle tasks

import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    if (task) {
      // task is valid
      task.status = status;
      return task;
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}

// Explaination-
// 1. Injectable() - marks the class as a provider that can be injected into other classes
// 2. private tasks - An array that stores all tasks
// 3. getAllTasks() - Returns all tasks
// 4. createTask() - Creates a new task with a unique ID and adds it to the tasks array
// 5. getTaskById() - Finds and returns a task by its ID
// 6. updateTaskStatus() - Updates the status of an existing task
// 7. deleteTask() - Removes a task by its ID
