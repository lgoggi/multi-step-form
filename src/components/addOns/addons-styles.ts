import styled from "styled-components";
import { Name, Subtext } from "../styles";

export const AddonsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 997px){
    height: stretch;
  }
`
export const AddOnOptions = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid grey;
  border-radius: 12px;
  display: flex;
  height: 6rem;
  justify-content: space-around;
  width: 100%;
  &.true{
    background-color: var(--theme-bg);
    border: 1px solid var(--purple);
  }
  @media screen and (max-width: 997px){
    border-radius: 6px;
    height: 30%;
    width: 90%;
  }
`

export const StyledCheckbox = styled.div`
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  height: 1.3rem;
  justify-content: center;
  width: 1.3rem;
  @media screen and (max-width: 997px){
    height: 1.2rem;
    width: 1.2rem;
  }
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 0;
  &:checked + ${StyledCheckbox}{
    background-color: var(--purple);
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  width: 70%;
  @media screen and (max-width: 997px){
    width: 50%;
  }
`
export const AddonName = styled(Name)`
 @media screen and (max-width: 997px){
    font-family: 'ubuntu-bold';
  }
`
export const AddonSubtext = styled(Subtext)`
  font-size: 1.2rem;
  @media screen and (max-width: 997px){
    font-size: 1rem;
  }
`
export const Price = styled.div`
  color: var(--purple);
  font-family: 'ubuntu-regular';
  font-size: 1.1rem;
  font-weight: 100;
  @media screen and (max-width: 997px){
    font-size: 1rem;
  }
`