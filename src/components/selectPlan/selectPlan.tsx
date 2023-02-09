import { useState } from "react";
import { ReactComponent as Arcade } from "/assets/images/icon-arcade.svg"
import { ReactComponent as Advanced } from "/assets/images/icon-advanced.svg"
import { ReactComponent as Pro } from "/assets/images/icon-pro.svg"
import { componentProps, planProps } from "../../types/types";
import { Wrapper, Subtext, HeadText, HeadWrapper } from "../styles";
import { InfoText, Label, LabelOption, Option, OptionCheckbox, OptionName, OptionPrice, OptionsWrapper, OptionText, Switch, Toggle, ToggleWrapper } from "./select-styles";

const SelectPlan = ({ user, setUser }: componentProps) => {
  const [options, setOptions] = useState([
    {
      icon: Arcade,
      name: 'Arcade',
      price: {
        monthly: 9,
        yearly: 90
      },
      selected: true
    },
    {
      icon: Advanced,
      name: 'Advanced',
      price: {
        monthly: 12,
        yearly: 120
      },
      selected: false
    },
    {
      icon: Pro,
      name: 'Pro',
      price: {
        monthly: 15,
        yearly: 150
      },
      selected: false
    }
  ])

  const handleChange = ({ name, price }: planProps) => {
    options.forEach((item) => {
      if (item.selected) {
        user.plan.name = name;
        item.selected = false;
        user.plan.price = price;
      }
      if (item.name === name) {
        item.selected = true;
      }
    })
    setOptions([...options])
  }

  const handlePeriod = (checked: boolean) => {
    if (checked) {
      user.period = 'yearly'
    } else {
      user.period = 'monthly'
    }
    setUser({ ...user })
  }


  return (
    <Wrapper>

      <HeadWrapper>
        <HeadText>Select your plan</HeadText>
        <Subtext>you have the option of monthly ou yearly billing.</Subtext>
      </HeadWrapper>

      <OptionsWrapper >
        {options.map((item, index) => {
          return (
            <LabelOption key={index}>
              <OptionCheckbox checked={item.selected} onChange={() => handleChange(item)} />
              <Option className={((item.selected) ? 'selected' : '')}>
                <item.icon className="icon" />
                <OptionText>
                  <OptionName>{item.name}</OptionName>
                  <OptionPrice>${(user.period === 'monthly') ? `${item.price.monthly}/mo` : `${item.price.yearly}/yr`}</OptionPrice>
                </OptionText>
                {(user.period === 'yearly') ? <InfoText>2 month free</InfoText> : <></>}
              </Option>
            </LabelOption>
          )
        })}
      </OptionsWrapper>

      <ToggleWrapper>
        <Label>
          <span className={(user.period === 'monthly') ? 'selected' : ''}>Monthly</span>
          <Toggle type="checkbox" onChange={(e) => handlePeriod(e.currentTarget.checked)} />
          <Switch />
          <span className={(user.period === 'yearly') ? 'selected' : ''}>Yearly</span>
        </Label>
      </ToggleWrapper>

    </Wrapper>
  )
}

export default SelectPlan