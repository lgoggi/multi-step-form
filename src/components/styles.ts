import styled from "styled-components";
//for shared components
export const Wrapper = styled.div`
  align-items: center; 
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: start;
  min-height: 40vh;
  min-width: fit-content;
  width: var(--component-width);
  @media screen and (max-width: 997px){
    align-self: flex-start;
    background-color: white;
    border-radius: 12px;
    gap: 30px;
    height: 80%;
    justify-content: start;
    max-height: 80%;
    min-height: 35vh;
    padding: 25px 0 35px;
  }
`
export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 997px){
    justify-content: space-around;
    width: 80%;
  }
`
export const HeadText = styled.div`
  color: var(--theme-blue);
  font-family: 'ubuntu-bold';
  font-size: 2.5rem;
  @media screen and (max-width: 997px){
   font-size: 1.7rem;
  }
`
export const Name = styled.div`
  font-family: 'ubuntu-medium';
  color: var(--theme-blue);
  font-size: 1.3rem;
  @media screen and (max-width: 997px){
   font-size: 1rem;
  }
`
export const Subtext = styled.div`
  color: var(--grey);
  font-family: 'ubuntu-regular';
  font-size: 1.4rem;
  font-weight: 100;
  @media screen and (max-width: 997px){
   font-size: 1.1rem;
  }
`

