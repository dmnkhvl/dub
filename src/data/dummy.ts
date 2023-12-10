import { Stage } from "@/types/global";

export enum StageStatus {
  Locked = "Locked",
  Unlocked = "Unlocked",
  Completed = "Completed",
}
export const dummyData: Array<Stage> = [
  {
    id: 0,
    name: "Concept & Planning",
    status: StageStatus.Unlocked,
    tasks: [
      { id: 0, name: "Market Research", completed: false },
      { id: 1, name: "Business Plan", completed: false },
      { id: 2, name: "Define Target Audience", completed: false },
    ],
  },
  {
    id: 1,
    name: "Product Development",
    status: StageStatus.Locked,
    tasks: [
      { id: 0, name: "Design Prototype", completed: false },
      { id: 1, name: "Test Prototype", completed: false },
    ],
  },
  {
    id: 2,
    name: "Launch Preparation",
    status: StageStatus.Locked,
    tasks: [
      { id: 0, name: "Marketing Strategy", completed: false },
      { id: 1, name: "Prepare Launch Event", completed: false },
      { id: 2, name: "Public Relations", completed: false },
    ],
  },
  {
    id: 3,
    name: "Growth & Expansion",
    status: StageStatus.Locked,
    tasks: [
      { id: 0, name: "Scale Production", completed: false },
      { id: 1, name: "Expand Market Reach", completed: false },
      { id: 2, name: "Develop New Features", completed: false },
    ],
  },
];
export default dummyData;
