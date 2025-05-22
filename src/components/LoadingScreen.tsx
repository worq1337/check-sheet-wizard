
import React from "react";
import { Progress } from "@/components/ui/progress";

const LoadingScreen = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full animate-fade-in">
      <div className="mb-4 text-xl font-semibold animate-pulse">
        Загрузка данных...
      </div>
      <div className="w-64">
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
};

export default LoadingScreen;
