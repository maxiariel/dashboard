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
  max-width: 300px;
`;
export const AvatarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

`;
export const Avatar = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  object-position: center;
`;

export const Content = styled.div``;
