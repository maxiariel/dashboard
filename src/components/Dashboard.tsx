import { useState } from "react";
import data from "../data/workouts.json";
import "./style.css";

interface IData {
  description: string;
  levelTag: string;
  title: string;
  impactTag: string;
  id: string;
  trainerId: string;
  duration: number;
  thumbnail: any;
  media: any;
}

export default function Dashboard(): JSX.Element {
  const [userData] = useState<IData[]>(data);

  return (
    <div className="container-dashboard">
      {userData?.map((e: IData, i: number) => (
        <div key={i} className="card-container">
          <h2 className="title">{e.title}</h2>
          <div className="img-container">
            <img src={e.thumbnail} alt="" className="img" />
          </div>
          <div>
            <p>Description: {e.description}</p>
            <p>Impact: {e.impactTag}</p>
            <p>Level: {e.levelTag}</p>
            <p>Duration: {e.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
