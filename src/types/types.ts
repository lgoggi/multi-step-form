export interface componentProps {
  user: userProps,
  setUser: React.Dispatch<React.SetStateAction<userProps>>,
  step: stepProps[],
  setStep: React.Dispatch<React.SetStateAction<stepProps[]>>,
  index: number,
}

export interface stepProps {
  number: number,
  title: string,
  rendered: boolean,
  component?: (props: componentProps) => JSX.Element,
  completed: boolean
}

export interface planProps {
  name: string,
  price: {
    [key: string]: number
  }
}

export interface userProps {
  [key: string]: string | planProps | planProps[],
  name: string,
  email: string,
  telephone: string,
  period: string,
  plan: planProps
  addons: planProps[]
}