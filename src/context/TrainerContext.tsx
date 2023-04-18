import { createContext, useEffect, useState } from "react";

export const TrainerContext = createContext({});

interface IProps {
  children?: React.ReactNode;
}

export default function TrainerProvider({ children }: IProps) {
  const [trainers, setTrainers] = useState<any>();

  const getTrainer = async () => {
    const trainerData = await fetch("workouts.json");
    const results = await trainerData.json();
    setTrainers(results);
  };

  useEffect(() => {
    getTrainer();
  }, []);

  return (
    <TrainerContext.Provider value={{ trainers }}>
      {children}
    </TrainerContext.Provider>
  );
}
