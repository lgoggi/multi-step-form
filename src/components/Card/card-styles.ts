import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 2fr 5fr;
  grid-template-areas: 
  "sidebar main";
  height: fit-content;
  min-height: 568px;
  min-width: fit-content;
  padding: 20px;
  width: 60vw;
  @media screen and (max-width: 997px){
    background-color: hsl(231, 100%, 95%);
    border-radius: 0;
    grid-template-columns: 1fr;
    grid-template-areas: "main";
    grid-gap: 0;
    height: 100vh;
    padding: 0;
    width: 100vw;
  }
`
export const InnerWrapper = styled.div`
  align-self: flex-end;
  display: grid;
  grid-area: main;
  grid-template-rows: 8fr 2fr;
  grid-template-areas: 
    "step" 
    "navbar";
    height: 100%;
    justify-self: center;
    width: fit-content;
  &.finished{
    display: none;
  }
  @media screen and (max-width: 997px){
    height: 85%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const StepWrapper = styled.div`
  display: none;
  grid-area: step;
  &.true{
    align-items: center;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 997px){ 
    width: 90vw;
  }
`

