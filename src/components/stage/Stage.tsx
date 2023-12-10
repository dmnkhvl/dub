import TaskList from "@/components/task/TaskList.tsx";
import { Task as TaskT } from "@/types/global";
import { StageStatus } from "@/data/dummy.ts";
import StageSubheading from "@/components/stage/StageSubheading.tsx";
import StageHeading from "@/components/stage/StageHeading.tsx";
import StageLocked from "@/components/stage/StageLocked.tsx";
import StageCompleted from "@/components/stage/StageCompleted.tsx";

interface StageProps {
  stageTitle: string;
  stageId?: number;
  status: StageStatus;
  tasks: Array<TaskT>;
  stageIndex: number;
  handleCheckboxChange: (taskId: number, stageId: number) => void;
  unlockStage: (stageId: number) => void;
}

export const Stage = ({
  stageTitle,
  status,
  tasks,
  stageIndex,
  handleCheckboxChange,
  unlockStage,
}: StageProps) => {
  return (
    <div className="text-left pt-6">
      <StageSubheading status={status} stageIndex={stageIndex} />
      <StageHeading status={status} stageTitle={stageTitle} />
      <div className="relative">
        <TaskList
          data={tasks}
          stageStatus={status}
          handleCheckboxChange={handleCheckboxChange}
          stageId={stageIndex}
        />
        {status === StageStatus.Locked && (
          <StageLocked stageIndex={stageIndex} />
        )}
        {status === StageStatus.Completed && (
          <StageCompleted stageIndex={stageIndex} unlockStage={unlockStage} />
        )}
      </div>
    </div>
  );
};

export default Stage;
