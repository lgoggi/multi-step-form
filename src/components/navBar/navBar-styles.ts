import styled from "styled-components";

export const NavWrapper = styled.div`
  align-items: end;
  display: flex;
  flex-direction: row;
  grid-area: navbar;
  height: 80%;
  justify-content: space-between;
  justify-self: center;
  width:stretch;
  @media screen and (max-width: 997px){
    align-items: center;
    background-color: white;
    height: 15%;
    min-height: 12vh;
    min-width: 0;
    padding: 0 4vw;
    width: 92vw;
  }
`
export const PrevButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--grey);
  cursor: pointer;
  font-family: 'ubuntu-bold';
  font-size: 1.1rem;
  &:hover{
    color: var(--theme-blue);
    font-size: 1.2rem;
  }
  @media screen and (max-width: 997px){
    font-size: 1rem;
  } 
`
export const NextButton = styled.button`
  background-color: var(--theme-blue);
  border: none;
  border-radius: 6px;
  color: var(--theme-bg);
  cursor: pointer;
  font-family: 'ubuntu-regular';
  font-size: 1.2rem;
  height: 3rem;
  width: 8rem;
  &.false{
    opacity: 0.6;
  }
  &:active{
    background-color: var(--theme-blue);
  }
  @media screen and (max-width: 997px){
    font-size: 1.1rem;
    width: 7rem;
  } 
`
export const ConfirmButton = styled(NextButton)`
  background-color: var(--purple);
`