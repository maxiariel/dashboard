import { useContext } from "react";
import { TrainerContext } from "../../context/TrainerContext";
import { IData } from "../../types";
import CardItems from "../cardItems/CardItems";
import { Container } from "../cardItems/StyleCard";

export default function CardTrainer() {
  const { trainers }: any = useContext(TrainerContext);


  return (
    <Container>
        {trainers?.map((value : IData)=>{
            return <CardItems key={value.id} {...value} />
        })}
    </Container>
  );
}
