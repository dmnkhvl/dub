import React from "react";
import { LockClosedIcon } from "@radix-ui/react-icons";

interface StageLockedProps {
  stageIndex: number;
}

const StageLocked: React.FC<StageLockedProps> = ({ stageIndex }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-[5px] flex items-center justify-start">
      <div className="flex items-center gap-x-2 px-2">
        <LockClosedIcon width="18" height="18" />
        <p className="text-sm text-white/90">
          Complete{" "}
          <span className="uppercase tracking-wider text-xs font-bold text-white">
            PHASE {stageIndex}{" "}
          </span>
          to unlock
        </p>
      </div>
    </div>
  );
};

export default StageLocked;
