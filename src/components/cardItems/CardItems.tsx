import { Link } from "react-router-dom";
import { IData } from "../../types";
import {
  CardContainer,
  Avatar,
  AvatarContainer,
  Media,
  Title,
} from "./StyleCard";
import { Info } from "./StyleCard";

export default function CardItems({
  id,
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
        <Link to={`/${id}`}>
          <Title>{title}</Title>
        </Link>

        <Info>
          Description: <span>{description}</span>
        </Info>
        <Info>
          Level: <span>{levelTag} </span>
        </Info>
        <Info>
          Impact: <span>{impactTag} </span>
        </Info>
        <Info>
          Duration: <span>{duration} </span>
        </Info>
        <Media src={media} controls></Media>
      </div>
    </CardContainer>
  );
}
