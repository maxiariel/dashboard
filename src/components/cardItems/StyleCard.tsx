import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  max-width: 350px;
`;

export const Title = styled.h3`
  text-decoration: underline;
  color: black;
  font-size: 1.2rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 330px;
  object-fit: cover;
  object-position: top;
`;

export const Info = styled.p`
  font-size: 1.19rem;
  font-variant: petite-caps;
  & > span {
    font-size: 0.95rem;
    color: #343434;
  }
`;

export const Media = styled.video`
  width: 100%;
  height: 150px;
  border-radius: 4px;
`;
