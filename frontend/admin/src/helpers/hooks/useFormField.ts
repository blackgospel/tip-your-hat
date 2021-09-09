import { useState } from 'react'

type InitialValueType = {
  [x: string]: any
}

const useFormField = (initialValue: InitialValueType) => {
  const [fields, setFields] = useState(initialValue)

  const onChange = (key: string) => (event: any, manualValue?: any) => {
    const value = manualValue || event.target.value
    setFields((state) => ({ ...state, [key]: value }))
  }

  const resetFields = () => {
    setFields(initialValue)
  }

  return { fields, onChange, resetFields }
}

export default useFormField
