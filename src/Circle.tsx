import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 5px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
    const [counter,setCounter] = useState(0);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor }>
      Circle
    </Container>
  );
};

export default Circle;
