import React from "react";
import Stage from "@/components/stage/Stage.tsx";
import type { Stage as StageT } from "@/types/global";

interface StageListProps {
  data: Array<StageT>;
  handleCheckboxChange: (taskId: number, stageId: number) => void;
  unlockStage: (stageId: number) => void;
}

const StageList: React.FC<StageListProps> = ({
  data,
  handleCheckboxChange,
  unlockStage,
}) => {
  return (
    <div>
      {data.map((stage, index) => (
        <Stage
          key={stage.id}
          stageId={stage.id}
          stageTitle={stage.name}
          status={stage.status}
          tasks={stage.tasks}
          stageIndex={index}
          handleCheckboxChange={handleCheckboxChange}
          unlockStage={unlockStage}
        />
      ))}
    </div>
  );
};

export default StageList;
