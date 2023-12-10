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
      className="flex items-center gap-x-2 w-full"
      onClick={() => handleCheckboxChange(stageId, taskId)}
    >
      <Checkbox
        onCheckedChange={() => handleCheckboxChange(stageId, taskId)}
        checked={taskCompleted}
      />
      <p>{taskName}</p>
    </button>
  );
};

export default Task;
