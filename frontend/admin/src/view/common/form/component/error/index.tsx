import React from 'react'
import { ErrorProps } from '../../index.types'
import { ErrorItem, ErrorItemMessage, ErrorList, Errors } from './index.styles'

const Error: React.FC<ErrorProps> = ({ error, fieldError, name }) => {
  if (fieldError && name) {
    return (
      <Errors>
        <ErrorList>
          {fieldError[name].map((item, index) => (
            <ErrorItem key={index}>
              <ErrorItemMessage error>{item.message}</ErrorItemMessage>
            </ErrorItem>
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
              <ErrorItem key={index}>
                <ErrorItemMessage error>{item.message}</ErrorItemMessage>
              </ErrorItem>
            ))}
        </ErrorList>
      </Errors>
    )
  }

  return null
}

export default Error
