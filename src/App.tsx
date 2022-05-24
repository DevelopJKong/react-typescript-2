import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;


function App() {
  return (
    <Wrapper>
      <Circle bgColor="teal" borderColor="yellow"/>
      <Circle bgColor="tomato"/>
    </Wrapper>
  );
}

export default App;
