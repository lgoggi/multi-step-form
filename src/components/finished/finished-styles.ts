import styled from "styled-components";
import { Subtext } from "../styles";

export const Wrapper = styled.div`
  display: none;
  width: var(--component-width);
  &.finished{
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    justify-self: center;
  }
  @media screen and (max-width: 997px){
    align-self: center;
    background-color: white;
    border-radius: 12px;
    grid-area: main;
    height: 70%;
    width: 90%;
    .icon{
      transform: scale(0.8);
    }
  }
`
export const Title = styled.div`
  color: var(--theme-blue);
  font-family: 'ubuntu-bold';
  font-size: 2.5rem;
  @media screen and (max-width: 997px){
   font-size: 2rem;
  }
`
export const Text = styled(Subtext)`
  font-size: 1.3rem;
  text-align: center;
  width: 80%;
  @media screen and (max-width: 997px){
    font-size: 1.2rem;
    width: 90%;
  }
`