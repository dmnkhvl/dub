import { Alert, AlertDescription } from "@/components/ui/alert.tsx";
import { AlertCircle } from "lucide-react";

export default function AlertDiscardProgress() {
  return (
    <div className="top-10 right-0  max-w-[300px]">
      <Alert
        variant="destructive"
        className="flex items-center justify-center text-xs h-2"
      >
        <AlertCircle className="h-3 w-3 mr-2" />
        <AlertDescription className="text-xs p-0 m-0">
          <p>This will discard all of your progress</p>
        </AlertDescription>
      </Alert>
    </div>
  );
}
