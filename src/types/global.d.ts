export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export interface Stage {
  id: number;
  name: string;
  status: StageStatus;
  tasks: Task[];
}

export interface HandleCheckProps {
  id: number;
  name: string;
  status: StageStatus;
  tasks: Task[];
}
export interface TaskCompletion {
  stageId: number;
  taskId: number;
  completed: boolean;
}
