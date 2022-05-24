import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius:50px;
`;



function App() {
  return (
    <Father>
      <Box bgColor="tomato"></Box>
      <Circle bgColor="teal"></Circle>
    </Father>
  );
}

export default App;