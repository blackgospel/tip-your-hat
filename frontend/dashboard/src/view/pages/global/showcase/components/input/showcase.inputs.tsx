import { useState } from 'react'
import {
  CheckboxInput,
  H1,
  H3,
  HSpacing,
  PasswordInput,
  RadioInput,
  SelectInput,
  SwitchInput,
  TextInput,
  VSpacing,
} from 'view/atomic'
import { ShowcaseComponents } from '../../index.styles'
import { Container } from './index.styles'
import data from './index.switch.data'

const ShowcaseInput: React.FC = () => {
  const [text, setText] = useState('Hello World')
  const [radio, setRadio] = useState('EUR')
  const [currency, setCurrency] = useState('EUR')
  const [checked, setChecked] = useState(true)

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText((event.target as HTMLInputElement).value)
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency((event.target as HTMLInputElement).value)
  }

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked((event.target as HTMLInputElement).checked)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value)
  }

  return (
    <Container>
      <H1>Inputs</H1>
      <VSpacing space="medium" />
      <ShowcaseComponents noCenter>
        <TextInput label="example" value={text} onChange={handleTextChange} />
        <HSpacing space="medium" />
        <PasswordInput
          label="example"
          value={text}
          onChange={handleTextChange}
        />
        <HSpacing space="medium" />
        <SelectInput
          label="select"
          value={currency}
          onChange={handleSelectChange}
          options={data}
          helperText="Please select your currency"
        />
      </ShowcaseComponents>
      <VSpacing />
      <ShowcaseComponents noCenter>
        <SwitchInput
          label="switch"
          checked={checked}
          onChange={handleSwitchChange}
        />
        <HSpacing space="medium" />
        <CheckboxInput
          label="checkbox"
          checked={checked}
          onChange={handleSwitchChange}
        />
        <HSpacing space="medium" />
        <RadioInput
          label="radio"
          value={radio}
          onChange={handleRadioChange}
          options={data}
          row={true}
          helperText="Please select your currency"
        />
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>States</H3>
      <VSpacing space="medium" />
      <ShowcaseComponents>
        <TextInput
          label="Disabled"
          value={text}
          onChange={handleTextChange}
          disabled
        />
        <HSpacing space="medium" />
        <TextInput
          label="Read Only"
          value={text}
          onChange={handleTextChange}
          readOnly
        />
        <HSpacing space="medium" />
      </ShowcaseComponents>
      <VSpacing space="medium" />
      <H3>Errors</H3>
      <VSpacing space="medium" />
      <ShowcaseComponents noCenter>
        <TextInput
          label="Error"
          value={text}
          onChange={handleTextChange}
          error
        />
        <HSpacing space="medium" />
        <TextInput
          label="Error"
          value={text}
          onChange={handleTextChange}
          error
          helperText="Incorrect entry"
        />
      </ShowcaseComponents>
    </Container>
  )
}

export default ShowcaseInput
