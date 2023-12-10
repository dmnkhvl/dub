import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import StageList from "@/components/stage/StageList.tsx";
import dummyData, { StageStatus } from "@/data/dummy.ts";
import type { Stage } from "@/types/global";
import AppFallback from "@/components/AppFallback.tsx";
import { isEqual } from "lodash";
import RandomFactOverlay from "@/components/RandomFactOverlay.tsx";
import Footer from "@/components/Footer.tsx";

function App() {
  const RANDOM_FACTS_API_URL =
    "https://uselessfacts.jsph.pl/random.json?language=en";

  const savedData: string | null = localStorage.getItem("savedData");
  const initialData = () => {
    return savedData ? JSON.parse(savedData) : dummyData;
  };

  const [data, setData] = useState<Stage[]>(initialData);

  useEffect(() => {
    if (savedData) {
      const savedParsedData = JSON.parse(savedData);
      if (!isEqual(savedParsedData, data)) {
        setData(savedParsedData);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedData", JSON.stringify(data));
  }, [data]);

  const [randomFact, setRandomFact] = useState<string | null>(
    localStorage.getItem("randomFact"),
  );

  const fetchRandomFact = async () => {
    try {
      const response = await fetch(RANDOM_FACTS_API_URL);

      if (!response.ok) {
        throw new Error("Problem fetching the fact");
      }

      const randomFact = await response.json();
      localStorage.setItem("randomFact", randomFact.text);
      setRandomFact(randomFact.text);
    } catch (error) {
      console.error("There was a problem fetching new fact:", error);
    }
  };

  function updateData(data: Stage[]) {
    setData(data);
    localStorage.setItem("savedData", JSON.stringify(data));
  }

  const onCheckboxChange = (
    checkboxStageId: number,
    checkboxTaskId: number,
  ) => {
    const updatedData: Stage[] = [...data];
    const stage = updatedData.find((stage) => stage.id === checkboxStageId);
    const nextStage = updatedData.find(
      (stage) => stage.id === checkboxStageId + 1,
    );

    if (stage) {
      const task = stage.tasks.find((task) => task.id === checkboxTaskId);
      if (task) {
        task.completed = !task.completed;

        const allTasksCompleted = stage.tasks.every((task) => task.completed);
        if (allTasksCompleted) {
          stage.status = StageStatus.Completed;
          if (nextStage) {
            nextStage.status = StageStatus.Unlocked;
          }
        }
      }
    }

    const allStagesCompleted = updatedData.every((stage) =>
      stage.tasks.every((task) => task.completed),
    );

    const lastStage = updatedData[updatedData.length - 1];
    updateData(updatedData);

    if (lastStage && allStagesCompleted) {
      fetchRandomFact();
    }
  };

  const unlockStage = (stageId: number) => {
    const updatedData: Stage[] = [...data];
    const stage = updatedData.find((stage) => stage.id === stageId);
    const nextStages = updatedData.filter((stage) => stage.id > stageId);

    if (stage) {
      stage.status = StageStatus.Unlocked;
      stage.tasks.forEach((task) => {
        task.completed = false;
      });
      nextStages.forEach((stage) => {
        stage.status = StageStatus.Locked;
        stage.tasks.map((task) => {
          task.completed = false;
        });
      });
    }
    localStorage.removeItem("randomFact");
    updateData(updatedData);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={`max-w-[500px]  mx-auto  py-10 px-16 `}>
        {data ? (
          <>
            <StageList
              data={data}
              handleCheckboxChange={onCheckboxChange}
              unlockStage={unlockStage}
            />
            <Footer />
            {randomFact && (
              <RandomFactOverlay
                text={randomFact}
                generateRandomFact={fetchRandomFact}
                setRandomFact={setRandomFact}
              />
            )}
          </>
        ) : (
          <AppFallback />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
