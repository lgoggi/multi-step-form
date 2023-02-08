import { useEffect, useState } from "react"
import { componentProps } from "../../types/types";
import { Wrapper, HeadWrapper, HeadText, Subtext } from "../styles";
import { ErrorMsg, Form, LabelWrapper, TextInput } from "./info-styles"
import { userProps } from "../../types/types";

const Info = ({ user, setUser, step, setStep, index }: componentProps) => {
  const [inputClass, setInputClass] = useState({
    name: '',
    email: '',
    telephone: '',
  });
  const emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
  const telRegex = new RegExp(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/);

  const handleInput = (value: string, prop: string) => {
    user[prop as keyof userProps] = value;
    setUser({ ...user });
  }

  const checkInput = () => {
    let valid = true;
    //validates order of inputs so it doesnt trigger useless invalid alerts 
    if (!(user.name || user.email || user.telephone)) {
      inputClass.name = '';
      inputClass.email = '';
      inputClass.telephone = '';
      return;
    }
    if (user.email && !user.name) {
      inputClass.name = 'invalid';
      valid = false;
      setInputClass({ ...inputClass });
    }
    if (user.telephone && (!user.email || !user.name)) {
      if (!user.name) {
        inputClass.name = 'invalid';
      }
      if (!user.email) {
        inputClass.email = 'invalid';
      }
      valid = false;
      setInputClass({ ...inputClass });
    }

    //validates inputs
    if (user.name === '') {
      inputClass.name = 'invalid';
      valid = false;
    } else {
      inputClass.name = '';
    }

    if (user.email !== '') {
      if (emailRegex.test(user.email!)) {
        inputClass.email = '';
      } else {
        valid = false;
        inputClass.email = 'invalid';
      }
    } else {
      valid = false;
    }

    if (user.telephone !== '') {
      if (telRegex.test(user.telephone!)) {
        inputClass.telephone = '';
      } else {
        inputClass.telephone = 'invalid'
        valid = false;
      }
    } else {
      valid = false;
    }

    setInputClass({ ...inputClass });

    //validates step
    step[index].completed = valid;
    setStep([...step])

  }

  useEffect(() => {
    checkInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <Wrapper className={`${step[index].rendered}`}>

      <HeadWrapper>
        <HeadText>Personal info</HeadText>
        <Subtext>Please provide your name, email adress, and phone number.</Subtext>
      </HeadWrapper>

      <Form>
        <div style={{ width: '100%' }}>
          <LabelWrapper>
            <label htmlFor="name">Name</label>
            <ErrorMsg className={inputClass.name}>This field is required</ErrorMsg>
          </LabelWrapper>
          <TextInput id="name" className={inputClass.name} type='text'
            value={user.name} placeholder="e.g Frank Ocean"
            onChange={(e) => handleInput(e.currentTarget.value, e.currentTarget.id)}
            autoFocus />
        </div>

        <div style={{ width: '100%' }}>
          <LabelWrapper>
            <label htmlFor="email">Email adress</label>
            <ErrorMsg className={inputClass.email}>This field is required</ErrorMsg>
          </LabelWrapper>
          <TextInput id="email" className={inputClass.email} type='text'
            placeholder="e.g frankocean@blonde.com"
            onChange={(e) => handleInput(e.currentTarget.value, e.currentTarget.id)} />
        </div>

        <div style={{ width: '100%' }}>
          <LabelWrapper>
            <label htmlFor="telephone">Telephone</label>
            <ErrorMsg className={inputClass.telephone}>This field is required</ErrorMsg>
          </LabelWrapper>
          <TextInput id="telephone" className={inputClass.telephone} type='text'
            placeholder="(12) 34 5678-9999"
            onChange={(e) => handleInput(e.currentTarget.value, e.currentTarget.id)} />
        </div>
      </Form>

    </Wrapper>
  )
}

export default Info