import React from "react";
import type { Task as TaskT } from "@/types/global";
import Task from "@/components/task/Task.tsx";
import { StageStatus } from "@/data/dummy.ts";

export interface TaskListProps {
  data: Array<TaskT>;
  stageStatus: StageStatus;
  handleCheckboxChange: (taskId: number, stageId: number) => void;
  stageId: number;
}

const TaskList: React.FC<TaskListProps> = ({
  data,
  stageStatus,
  handleCheckboxChange,
  stageId,
}) => {
  const taskClass: string =
    stageStatus == StageStatus.Unlocked ? "" : "opacity-20";
  return (
    <div className={`flex flex-col gap-y-2 mt-2 p-2 ${taskClass}`}>
      {data.map((task) => (
        <div className="flex gap-x-2">
          <Task
            key={task.id}
            taskName={task.name}
            taskId={task.id}
            handleCheckboxChange={handleCheckboxChange}
            stageId={stageId}
            taskCompleted={task.completed}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
