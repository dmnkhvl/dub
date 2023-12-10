import { StageStatus } from "@/data/dummy.ts";

export default function StageHeading({
  status,
  stageTitle,
}: {
  status: StageStatus;
  stageTitle: string;
}) {
  return (
    <h1
      className={`text-2xl font-bold tracking-tight ${
        status == StageStatus.Unlocked ? "text-white" : "text-white/10"
      }`}
    >
      {stageTitle}
    </h1>
  );
}
