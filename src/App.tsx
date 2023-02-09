import styled from "styled-components";
import Card from "./components/Card/card";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
const Teste = styled.div`
  background: url(/assets/images/icon-arcade.svg);
  width: 15rem;
  height: 15rem;
`
function App() {
  return (
    <Wrapper>
      <Card/>
      <Teste>oi</Teste>
    </Wrapper>
  );
}

export default App;
