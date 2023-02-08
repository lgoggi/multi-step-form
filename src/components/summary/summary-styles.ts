import styled from "styled-components";
import { Name, Subtext } from "../styles";

export const SumWrapper = styled.div`
  align-items: center;
  background-color: var(--light-grey);
  border-radius: 12px;
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;
  padding: 30px 0;
  width: 100%;
  @media screen and (max-width: 997px){
    justify-content: start;
    padding: 0;
  }
`
export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  &.header{
    height: 4rem;
    border-bottom: 1px solid hsl(229, 24%, 77%);
  }
`
export const SumName = styled(Name)`
  &.price{
    font-weight: 800;
  }
  @media screen and (max-width: 997px){
    font-size: 1.2rem;
  }
`
export const ChangeButton = styled.div`
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: var(--grey);
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: center;
  height: 1.5rem;
  text-decoration: underline;
  width: fit-content;
`
export const SumSubtext = styled(Subtext)`
  font-size: 1rem;
  &.price{
    color: var(--theme-blue);
  }
`
export const Total = styled(Row)`
  align-items: center;
  background-color: transparent;
  height: 5rem;
`
export const FinalPrice = styled.div`
  color: var(--purple);
  font-size: 1.5rem;
  font-family: 'ubuntu-bold';
  @media screen and (max-width: 997px){
    font-size: 1.2rem;
  }
`