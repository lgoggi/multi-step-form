import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-area: sidebar;
  grid-template-areas: "content";
  height: fit-content;
  .background{
    grid-area: content;
    min-width: 274px;
    min-height: 100%;
  }
  .mobile{
    display: none;
    grid-area: content;
  }
  @media screen and (max-width: 997px){
    align-self: flex-start;
    grid-area: main;
    width: 100%;
    .background{ 
      display: none;
    }
    .mobile{
      display: block;
    }
  }
`

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  grid-area: content;
  height: 50%;
  justify-content: space-around;
  justify-self: center;
  margin: 2rem 0;
  width: 75%;
  padding: 15px;
  @media screen and (max-width: 997px){
    align-items: flex-start;
    flex-direction: row;
    height: fit-content;
    width: 60%;
  }
`
export const Step = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: fit-content;
  &.finished{
    cursor: default;
  }
`
export const NumberDiv = styled.div`
  align-items: center;
  border: 1px solid white;
  border-radius: 100%;
  color: white;
  display: flex;
  font-size: 1.2rem;
  font-family: 'ubuntu-medium';
  height: 2rem;
  justify-content: center;
  width: 2rem;
  &.true{
    background-color: hsl(206, 94%, 87%);
    color: black;
  }
  @media screen and (max-width: 997px){
    height: 2rem;
    width: 2rem;
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 1rem;
  @media screen and (max-width: 997px){ 
    display: none;
  }
`
export const StepNumber = styled.div`
  color: white;
  font-family: Arial;
  font-size: 0.9rem;
  font-weight: 100;
`
export const StepInfo = styled.div`
  color: white;
  font-size: 1rem;
  font-family: 'ubuntu-bold';
`