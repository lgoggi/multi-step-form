import { stepProps } from "../../types/types"
import {ReactComponent as Background} from "../../assets/images/bg-sidebar-desktop.svg"
import {ReactComponent as Mobile} from "../../assets/images/bg-sidebar-mobile.svg"

import { Step, NumberDiv, InnerWrapper, StepNumber, StepInfo, StepWrapper, Wrapper } from "./sidebar-styles"


interface Props {
  step: stepProps[],
  setStep: React.Dispatch<React.SetStateAction<stepProps[]>>
  }
const SideBar = ({step, setStep}: Props) => {

  const handleClick = (index: number) => {
    if (step[3].completed) {
      return;
    }
    if (!step[0].completed) {
      return;
    }
    step.forEach((item) => {
      item.rendered = false;
    })

    step[index].rendered = true;
    setStep([...step])
  }

  return (
    <Wrapper>
      <Mobile className='mobile' style={{width: "100%", height: "100%"}}/>
      <Background className='background' style={{width: "100%", height: "100%"}}/>
      <StepWrapper>
        {step.map((item, index) => {
          return (
            <Step key={index} className={(step[3].completed) ? 'finished' : ''} onClick={() => handleClick(index)}>
              <NumberDiv className={`${item.rendered}`}>{item.number}</NumberDiv>
              <InnerWrapper>
                <StepNumber> STEP {item.number} </StepNumber>
                <StepInfo>{item.title}</StepInfo>
              </InnerWrapper>
            </Step>
          )
        })}
      </StepWrapper>
            
    </Wrapper>
  )
}

export default SideBar