// Controllers are used to handle requests and deliver responses to the client
// They are decorated with @Controller
// Controller command:- nest g controller tasks
// Endpoints for API are defined here
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}

// Explaination
// 1. @Controller('tasks'):- Defines the base route for all endpoints in this Controller.
// 2. @Get(): Maps HTTP GET requests. Retrieves all tasks.
// 3. @Post():- Maps to HTTP Post requests; creates a new task using data from the request Body.
// 4. @Get('/:id'):- Retrieves a specific task by IDBCursor.
// 5. @Patch('/:id/status'):- Retrieves a task by its id and updates its status.
// 6. @Delete('/:id'):- Deletes a specific task by its id
