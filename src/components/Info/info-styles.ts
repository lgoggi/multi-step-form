import styled from "styled-components";

export const Form = styled.form`
  align-items: center;
  color: var(--theme-blue);
  display: flex;
  flex-direction: column;
  font-family: 'ubuntu-regular';
  height: 100%;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 997px){
    gap: 30px;
    height: stretch;
    justify-content: center;
    width: 80%;
  } 
`
export const LabelWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
`
export const ErrorMsg = styled.span`
  color: hsl(354, 84%, 57%);
  display: none;
  font-family: 'ubuntu-bold';
  &.invalid{
    display: block;
  }
  @media screen and (max-width: 997px){
    font-size: 0.8rem;
  } 
`
export const TextInput = styled.input`
  border: 1px solid grey;
  border-radius: 6px;
  color: var(--theme-blue);
  font-family: 'ubuntu-medium';
  font-weight: 600;
  font-size: 1rem;
  height: 3rem;
  padding-left: 15px;
  width: calc(100% - 15px);
  :-webkit-autofill{
    -webkit-text-fill-color: var(--theme-blue);
  }
  ::placeholder{
    color: var(--grey);
    font-weight: 400;
  }
  &.invalid{
    border: 2px solid hsl(354, 84%, 57%);
  }
  @media screen and (max-width: 997px){
    height: 2rem;
  }
`