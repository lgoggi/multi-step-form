import { useState } from "react";
import { ReactComponent as Checkmark } from "/src/assets/images/icon-checkmark.svg"
import { componentProps } from "../../types/types";
import { Wrapper, Subtext, HeadText, HeadWrapper, } from "../styles"
import { AddonName, AddOnOptions, AddonSubtext, AddonsWrapper, HiddenCheckbox, Price, StyledCheckbox, TextWrapper } from "./addons-styles"

//local addon has different  typing than addon on userProps
interface addonProps {
  name: string;
  subtext: string;
  price: {
    monthly: number,
    yearly: number
  },
  checked: boolean;
}
const AddOns = ({ user, setUser }: componentProps) => {
  const [addons, setAddons] = useState<addonProps[]>([
    {
      name: 'Online service',
      subtext: 'Access to multiplayer games',
      price: {
        monthly: 1,
        yearly: 10
      },
      checked: false
    },
    {
      name: 'Larger storage',
      subtext: 'Extra 1TB of cloud save',
      price: {
        monthly: 2,
        yearly: 20
      },
      checked: false
    },
    {
      name: 'Customizable profile',
      subtext: 'Custom theme on your profile',
      price: {
        monthly: 2,
        yearly: 20
      },
      checked: false
    }
  ])

  const handleCheck = (addon: addonProps) => {
    if (!addon.checked) {
      addon.checked = true;
      user.addons?.push({
        name: addon.name,
        price: addon.price
      })
    } else {
      addon.checked = false;
      user.addons = user.addons.filter((item) => item.name !== addon.name)
    }
    setUser({ ...user })
    setAddons([...addons])
  }
  return (
    <Wrapper>

      <HeadWrapper>
        <HeadText>Pick add-ons</HeadText>
        <Subtext>Add-ons help enhance your gaming experience.</Subtext>
      </HeadWrapper>

      <AddonsWrapper>
        {addons.map((item, index) => {
          return (
            <AddOnOptions key={index} className={`${item.checked}`}>
              <label>
                <HiddenCheckbox checked={item.checked} type="checkbox" onChange={() => handleCheck(item)} />
                <StyledCheckbox>
                  <Checkmark className='icon' />
                </StyledCheckbox>
              </label>
              <TextWrapper>
                <AddonName>{item.name}</AddonName>
                <AddonSubtext>{item.subtext}</AddonSubtext>
              </TextWrapper>
              <Price>{(user.period === 'monthly') ? `$${item.price.monthly}/mo` : `$${item.price.yearly}/yr`}</Price>
            </AddOnOptions>
          )
        })}
      </AddonsWrapper>
    </Wrapper>
  )
}

export default AddOns