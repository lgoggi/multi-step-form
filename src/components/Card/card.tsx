import { useState } from "react"
import { stepProps, userProps } from "../../types/types"
import { InnerWrapper, StepWrapper, Wrapper } from "./card-styles"
import SideBar from "../sidebar/sidebar"
import Info from "../Info/info"
import NavBar from "../navBar/navBar"
import SelectPlan from "../selectPlan/selectPlan"
import AddOns from "../addOns/AddOns"
import Summary from "../summary/summary"
import Finished from "../finished/finished"

const Card = () => {
  //initiates an object with default and empty data to be filled throughout the form 
  const [user, setUser] = useState<userProps>({
    name: '',
    email: '',
    telephone: '',
    plan: {
      name: 'Arcade',
      price: {
        monthly: 9,
        yearly: 90
      }
    },
    period: 'monthly',
    addons: []
  })
  //project built around these steps, each containing a component that will be rendered in queue as the form is filled
  const [step, setStep] = useState<stepProps[]>([
    {
      number: 1,
      title: 'YOUR INFO',
      rendered: true,
      component: Info,
      completed: false
    },
    {
      number: 2,
      title: 'SELECT PLAN',
      rendered: false,
      component: SelectPlan,
      completed: true
    },
    {
      number: 3,
      title: 'ADD-ONS',
      rendered: false,
      component: AddOns,
      completed: true
    },
    {
      number: 4,
      title: 'SUMMARY',
      rendered: false,
      component: Summary,
      completed: false
    }
  ])

  return (
    <Wrapper>

      <SideBar step={step} setStep={setStep} />

      <InnerWrapper className={(step[3].completed) ? 'finished' : ''}>
        {
          step.map((item, index) => {
            return (
              <StepWrapper key={index} className={`${item.rendered}`}>{item.component!({ user, setUser, step, setStep, index })}</StepWrapper>
            )
          })
        }
        <NavBar step={step} setStep={setStep}></NavBar>
      </InnerWrapper>
      {(step[3].completed) ? <Finished step={step} user={user}></Finished> : <></>}
    </Wrapper>
  )
}

export default Card
