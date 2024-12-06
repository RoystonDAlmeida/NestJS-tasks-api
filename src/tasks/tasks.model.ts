// tasks.model.ts

// Interface - describes the shape of a task object
// Fields-id, title, description, status
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// Enum - set of named constants
// OPEN - task is created not yet started
// IN_PROGRESS - work on the task is currently underway
// DONE - indicates that the task has been completed

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
