import {ReactComponent as ThankYou } from "../../assets/images/icon-thank-you.svg"
import { stepProps, userProps } from "../../types/types"
import { Text, Title, Wrapper } from "./finished-styles"

interface Props {
  step: stepProps[];
  user: userProps;
}
const Finished = ({step, user}: Props)=>{
  console.log('Data collected and ready to be sent: ', user)
  return (
    <Wrapper className={(step[3].completed)? 'finished' : ''}>
      <ThankYou className="icon"/>
      <Title>Thank you!</Title>
      <Text> Thanks for confirming your subscription! We hope you have fun using our plataform. If you ever need support, please feel free to email us at not@yourbusiness.com </Text>
    </Wrapper>
  )
}

export default Finished