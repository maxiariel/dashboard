import { IData } from "../../types";
import { CardContainer, Avatar, AvatarContainer } from "./StyleCard";

export default function CardItems({
  thumbnail,
  description,
  levelTag,
  media,
  title,
  impactTag,
  duration,
}: IData) {
  return (
    <CardContainer>
      <AvatarContainer>
        <Avatar src={thumbnail} alt="img-thumbnail" />
      </AvatarContainer>
      <div>
        <p>{description}</p>
        <p>{levelTag}</p>
        <p>{media}</p>
        <p>{title}</p>
        <p>{impactTag}</p>
        <p>{duration}</p>
      </div>
    </CardContainer>
  );
}
