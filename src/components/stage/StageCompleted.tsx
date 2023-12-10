import React, { useState } from "react";
import AlertDiscardProgress from "@/components/AlertDiscardProgress";
import { Check } from "lucide-react";
import { Cross1Icon } from "@radix-ui/react-icons";

interface StageCompletedProps {
  stageIndex: number;
  unlockStage: (stageIndex: number) => void;
}

const StageCompleted: React.FC<StageCompletedProps> = ({
  stageIndex,
  unlockStage,
}) => {
  const CheckIcon = <Check width="18" height="18" />;
  const DeleteIcon = <Cross1Icon width="18" height="18" />;
  const [buttonMessage, setButtonMessage] = useState("Completed");
  const [icon, setIcon] = useState(CheckIcon);
  const [alert, setAlert] = useState(false);

  const handleEnter = () => {
    setButtonMessage("Mark as incomplete");
    setIcon(DeleteIcon);
    setAlert(true);
  };

  const handleLeave = () => {
    setButtonMessage("Completed");
    setIcon(CheckIcon);
    setAlert(false);
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-[5px] flex flex-col items-start justify-center">
      <button
        className="relative flex items-center gap-x-2 px-2 pb-2"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => {
          unlockStage(stageIndex);
          handleLeave();
        }}
      >
        {icon}
        {buttonMessage}
      </button>
      {alert && <AlertDiscardProgress />}
    </div>
  );
};

export default StageCompleted;
