import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

export default function RandomFactOverlay({
  text,
  generateRandomFact,
  setRandomFact,
}: {
  text: string | null;
  generateRandomFact: () => void;
  setRandomFact: (text: string | null) => void;
}) {
  const closeOverlay = () => {
    setRandomFact(null);
    localStorage.removeItem("randomFact");
  };
  return (
    <div className="fixed inset-0 bg-[#09090B] bg-opacity-50 z-50 backdrop-blur-[10px] flex items-center justify-center px-10 sm:px-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={closeOverlay} className="p-4">
              Congrats! You've made significant progress on your journey.
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>click to close & see the progress</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="fixed bottom-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={generateRandomFact}
                className="uppercase text-sm text-gray-600 px-10 sm:p-4"
              >
                {text}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>click for another wisdom</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
