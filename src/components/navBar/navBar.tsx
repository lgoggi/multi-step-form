import { stepProps } from "../../types/types"
import { ConfirmButton, NextButton, PrevButton, NavWrapper } from "./navBar-styles"

interface Props {
  step: stepProps[],
  setStep: React.Dispatch<React.SetStateAction<stepProps[]>>,
  index?: number,
}
const NavBar = ({step, setStep}: Props) => {
  let index = step.findIndex((item)=> item.rendered)

  const handlePrev = () => {
    if(index<=0){
      return;
    }
    step[index-1].rendered=true;
    step[index].rendered=false;
    setStep([...step]);
  }
  const handleNext = () => {
    if(!(step[index].completed)){
      return;
    }
    if(index>=step.length-1){
      return;
    }
    step[index+1].rendered=true;
    step[index].rendered=false;
    setStep([...step]);
  }
  const handleConfirm = ()=>{
    step[3].completed=true;
    setStep([...step]);
  }
  return (
    <NavWrapper>
      <PrevButton onClick={()=>handlePrev()}>Go back</PrevButton>
      {(step[3].rendered)? 
      <ConfirmButton onClick={()=>handleConfirm()}>Confirm</ConfirmButton>
      :
      <NextButton className={`${step[index].completed}`} onClick={()=>handleNext()}>Next step</NextButton>
      }
    </NavWrapper>
  )
}

export default NavBar