# Simple Task Management API

This README provides an overview of the **Simple Task Management API** built using **NestJS**. This API allows users to manage tasks through a RESTful interface, supporting basic CRUD operations: Create, Read, Update, and Delete.

## Table of Contents
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Commands Used](#commands-used)
- [Project Structure](#project-structure)
- [Key Files](#key-files)
- [Technologies](#technologies)

## Installation

To set up the project, follow these steps:

1. **Install NestJS CLI**:
```bash
  npm i -g @nestjs/cli
```

2. **Create a new NestJS project**:
```bash
  nest new task-management
```

3. **Navigate to the project directory**:
```bash
  cd task-management
```

4. **Install necessary packages (if using UUID for task IDs)**:
```bash
  yarn add uuid
```

5. **Run the application**:
```bash
  npm run start:dev
```

Make necessary requests via API tool like Postman.

## API Endpoints
The following endpoints are available in the Task Management API:
```bash
Method	  Endpoint	        Description
GET	      /tasks	          Retrieve all tasks
GET	      /tasks/:id	      Retrieve a task by ID
POST	    /tasks	          Create a new task
PATCH	    /tasks/:id/status	Update the status of a task
DELETE	  /tasks/:id	      Delete a task
```

## Commands Used
The following commands are commonly used in this project:
1. Generate Service:
```bash
  nest g service tasks --no-spec
```

2. Generate Controller:
```bash
  nest g controller tasks --no-spec
```

3. Generate Module:
```bash
  nest g module tasks --no-spec
```

## Project Structure
The project structure is as follows:
```bash
  task-management/
  ├── src/
  │   ├── app.controller.ts
  │   ├── app.module.ts
  │   ├── app.service.ts
  │   ├── tasks/
  │       ├── tasks.controller.ts
  │       ├── tasks.service.ts
  │       ├── tasks.model.ts
  │       └── tasks.module.ts
  ├── main.ts
  ├── package.json
  └── README.md
```

## Key Files
1. app.module.ts: The root module that imports the TasksModule.
2. tasks.controller.ts: Handles incoming requests and returns responses.
3. tasks.service.ts: Contains business logic related to task management.
4. tasks.model.ts: Defines the structure of a Task object.

## Technologies
This project utilizes the following technologies:
1. NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
2. TypeScript: A superset of JavaScript that adds static types.
3. UUID: A library for generating unique identifiers for tasks.

This README serves as a guide to set up and understand the Simple Task Management API built with NestJS. For further details or contributions, feel free to explore the code or reach out with questions!