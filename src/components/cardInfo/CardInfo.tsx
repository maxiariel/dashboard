import { useParams } from "react-router-dom";
import HeaderWorkout from "../headerWorkout/HeaderWorkout";
import { TrainerContext } from "../../context/TrainerContext";
import { useContext, useState, useEffect } from "react";
import { IData } from "../../types";
import { Content, Description, Image, Info, Media } from "./StyleCardInfo";

export default function CardInfo() {
  const { id } = useParams();
  const { getTrainerId }: any = useContext(TrainerContext);
  const [trainer, setTrainer] = useState<IData>();

  useEffect(() => {
    setTrainer(getTrainerId(id));
  }, [id, getTrainerId]);
  return (
    <>
      <HeaderWorkout />
      <Content>
        <Image src={trainer?.thumbnail} alt="img-thumb" />
        <div>
          <Media src={trainer?.media} controls></Media>
          <Info>
            <p>
              Impact: <span>{trainer?.impactTag}</span>
            </p>
            <p>
              Duration: <span>{trainer?.duration}</span>
            </p>
            <p>
              Level: <span>{trainer?.levelTag}</span>
            </p>
          </Info>
          <Description>
            Description: <span>{trainer?.description}</span>
          </Description>
        </div>
      </Content>
    </>
  );
}
