import styled from "styled-components";
import { Name, Subtext } from "../styles";

export const OptionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 997px){
    flex-direction: column;
    gap: 15px;
  } 
`
export const LabelOption = styled.label`
  gap: 15px;
  min-width: 10rem;
  width: 31%;
  @media screen and (max-width: 997px){
    display: flex;
    width: 80%;
    height: 80%;
} 
`
export const Option = styled.div`
  align-items: flex-start;
  border: 1px solid grey;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-evenly;
  padding-left: 1.5rem;
  &:hover{
    border: 2px solid var(--theme-blue);
  }
  .icon{
    height: 5rem;
    transform: scale(1.2);
  }
  @media screen and (max-width: 997px){
    align-items: center;
    display: flex;
    column-gap: 15px;
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: start;
    width: 100%;
    .icon{
      height: fit-content;
      transform: scale(1);
    }
  } 
`
export const OptionCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;   
  width: 0;
  &:checked + ${Option}{
    background-color: var(--theme-bg);
    border: 2px solid var(--theme-blue);
  }
`
export const OptionText = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 6rem;
  justify-content: center;
  @media screen and (max-width: 997px){
    height:fit-content;
    min-height: 4em;
  } 
`
export const OptionName = styled(Name)`
  overflow: wrap;
  width: stretch;
  word-wrap: break-word;
  @media screen and (max-width: 997px){
    font-size: 1.2rem;
  }
`
export const OptionPrice = styled(Subtext)`
  font-size: 1.2rem;
  @media screen and (max-width: 997px){
    font-size: 1.1rem;
  }
`
export const InfoText = styled.div`
  color: var(--theme-blue);
  font-family: 'ubuntu-regular';
  font-size: 1rem;
  height: 3rem;
  @media screen and (max-width: 997px){
    align-self: center;
    justify-self: end;
    width: 80%;
    height: 1.2rem;
  } 
`
export const ToggleWrapper = styled.div`
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: center;
  width: 100%;
`
export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: fit-content;
  span{
    color: grey;
    font-family: 'ubuntu-regular';
    font-size: 1rem;
    font-weight: 100;
    margin: 0 10px;
    &.selected{
      color: var(--theme-blue);
      font-weight: 800;
      transition: 300ms all ease-in-out;
    }
  }
`
export const Switch = styled.div`
  background-color: var(--theme-blue);
  border-radius: 25px;
  height: 2rem;
  position: relative;
  transition: 300ms all ease-in-out;
  width: 4rem;
  &:before {
    content: "";
    background: white;
    border-radius: 50%;
    height: 1.2rem;
    left: 7px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: 300ms all ease-in-out;
    width: 1.2rem;
  }
  @media screen and (max-width: 997px){
    height: 1.5rem;
    width: 3rem;
    &:before {
    content: "";
    background: white;
    border-radius: 50%;
    height: 1rem;
    transform: translate(0, -50%);
    top: 50%;
    width: 1rem;
  }
  } 
  
`
export const Toggle = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + ${Switch}{
    &:before{
      transform: translate(32px, -50%);
      @media screen and (max-width: 997px){
        transform: translate(18px, -50%);
      }
    }
  }
`