import { Checkbox } from "@/components/ui/checkbox.tsx";

export interface TaskProps {
  taskName: string;
  taskCompleted: boolean;
  handleCheckboxChange: (taskId: number, stageId: number) => void;
  taskId: number;
  stageId: number;
}

export const Task = ({
  taskName,
  handleCheckboxChange,
  taskId,
  stageId,
  taskCompleted,
}: TaskProps) => {
  return (
    <button
      className="flex items-center gap-x-2 w-full  py-2 sm:py-1.5 "
      onClick={() => handleCheckboxChange(stageId, taskId)}
    >
      <Checkbox checked={taskCompleted} />
      <p>{taskName}</p>
    </button>
  );
};

export default Task;
