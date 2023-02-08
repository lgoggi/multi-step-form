import { componentProps } from "../../types/types";
import { Wrapper, HeadWrapper, HeadText, Subtext } from "../styles";
import { ChangeButton, FinalPrice, Row, SumName, SumSubtext, SumWrapper, Total } from "./summary-styles";

const Summary = ({ user, step, setStep }: componentProps) => {
  let result = 0;
  const handleChangeButton = () => {
    step[3].rendered = false;
    step[1].rendered = true;
    setStep([...step])
  }

  for (let i = 0; i < user.addons.length; i++) {
    result += user.addons[i].price[user.period]
  }
  result += user.plan.price[user.period];

  return (
    <Wrapper>

      <HeadWrapper>
        <HeadText>Finishing up</HeadText>
        <Subtext>Double-check everything looks OK before confirming.</Subtext>
      </HeadWrapper>

      <SumWrapper>
        <Row className="header">
          <div>
            <SumName>{user.plan.name}({user.period})</SumName>
            <ChangeButton onClick={() => handleChangeButton()}>Change</ChangeButton>
          </div>
          <SumName className="price">${(user.period === 'monthly') ? `${user.plan.price.monthly}/mo` : `${user.plan.price.yearly}/yr`}</SumName>
        </Row>
        {user.addons.map((addon, index) => {
          return (
            <Row key={index}>
              <SumSubtext>{addon.name}</SumSubtext>
              <SumSubtext className="price">+${(user.period === 'monthly') ? `${addon.price.monthly}/mo` : `${addon.price.yearly}/yr`}</SumSubtext>
            </Row>
          )
        })}
      </SumWrapper>

      <Total>
        <SumSubtext>Total {(user.period === 'monthly') ? '(per month)' : '(per year)'}</SumSubtext>
        <FinalPrice>+${result}{(user.period === 'monthly') ? '/mo' : '/yr'}</FinalPrice>
      </Total>
    </Wrapper>
  )
}

export default Summary