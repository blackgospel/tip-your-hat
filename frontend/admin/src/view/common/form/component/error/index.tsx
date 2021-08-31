import React from 'react'
import { ErrorProps } from '../../index.types'
import { Errors, ErrorList, ErrorItem } from './index.styles'

const Error: React.FC<ErrorProps> = ({ error, fieldError, name }) => {
  if (fieldError) {
    return (
      <Errors>
        <ErrorList>
          {fieldError[name!].map((item, index) => (
            <ErrorItem key={index}>{item.message}</ErrorItem>
          ))}
        </ErrorList>
      </Errors>
    )
  }

  if (error) {
    return (
      <Errors>
        <ErrorList>
          {Object.values(error)
            .flat()
            .map((item, index) => (
              <ErrorItem key={index}>{item.message}</ErrorItem>
            ))}
        </ErrorList>
      </Errors>
    )
  }

  return null
}

export default Error
