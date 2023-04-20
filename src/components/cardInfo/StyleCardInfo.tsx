import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #a2a2a2;
  margin: auto;
  border-radius: 4px;
  width: 80%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  background: #f4f4f4;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 450px;
    width: 102%;
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 75vh;
  margin-right: 1rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 101%;
    margin: 0;
    border-radius: 4px;
  }
`;

export const Info = styled.div`
  display: flex;
  & > p {
    padding-left: 15px;
    font-size: 1.19rem;
    font-variant: petite-caps;
    & > span {
      padding-left: 5px;
      font-size: 0.95rem;
      color: #343434;
    }
  }
  @media (max-width: 970px) {
    font-size: 1rem;
    flex-direction: column;
    & > p {
      margin: 0;
      padding-left: 5px;
    }
  }
`;

export const Media = styled.video`
  width: 80%;
  height: 200px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    border-radius: 4px;
  }
`;

export const Description = styled.p`
  font-size: 1.19rem;
  font-variant: petite-caps;
  & > span {
    padding-left: 5px;
    font-size: 0.95rem;
    color: #343434;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5px;
    padding-left: 5px;
    margin-bottom: 30px;
  }
`;
