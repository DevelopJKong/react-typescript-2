import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useRecoilState } from "recoil";
import { themeChangeState } from "./atoms";
import { darkTheme, lightTheme } from "./theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const [check, setCheck] = useRecoilState(themeChangeState);
  const onCheck = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCheck((prev) => !prev);
  };
  console.log(check);

  return (
    <ThemeProvider theme={check ? darkTheme : lightTheme}>
      <Wrapper>
        <button onClick={onCheck}>Login</button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
