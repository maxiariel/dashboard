import { createContext, useEffect, useState } from "react";
import { IData } from "../types";

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

  const getTrainerId = (id: string) => {
    return trainers?.find((value: IData) => value.id === id);
  };

  useEffect(() => {
    getTrainer();
  }, []);

  return (
    <TrainerContext.Provider value={{ trainers, getTrainerId }}>
      {children}
    </TrainerContext.Provider>
  );
}
