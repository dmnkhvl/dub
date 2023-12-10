import { StageStatus } from "@/data/dummy.ts";

export default function StageSubheading({
  status,
  stageIndex,
}: {
  status: StageStatus;
  stageIndex: number;
}) {
  return (
    <h2
      className={`text-xs mb-1  uppercase  tracking-wider   ${
        status == StageStatus.Unlocked ? "text-gray-400" : "text-white/10"
      }`}
    >
      STAGE {stageIndex + 1}
    </h2>
  );
}
