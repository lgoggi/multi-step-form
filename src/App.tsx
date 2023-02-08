import styled from "styled-components";
import Card from "./components/Card/card";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

function App() {
  return (
    <Wrapper>
      <Card/>
    </Wrapper>
  );
}

export default App;
