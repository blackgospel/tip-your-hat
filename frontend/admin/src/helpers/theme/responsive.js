import React from 'react'
import styled from 'styled-components/macro'
import theme from './theme'

const makeResponsiveComponent = (rulesets, tagName = 'div') =>
  styled(tagName)`
    ${buildStyles(rulesets)}
  `

const buildStyles = (rulesets) =>
  rulesets.reduce(
    (cssString, { constraint, width, rules }) =>
      `${cssString} @media (${constraint}-width: ${width}) { ${rules} }`,
    ''
  )

const hideAt = (breakpoints) => {
  const rulesets = Object.entries(breakpoints).reduce(
    (rulesets, [constraint, width]) => [
      ...rulesets,
      {
        constraint,
        width: `${width}px`,
        rules: `display: none;`,
      },
    ],
    []
  )

  return makeResponsiveComponent(rulesets)
}

export const Breakpoint = ({ min, max, children }) => {
  const Component = hideAt({
    min: theme.breakpoints[min],
    max: theme.breakpoints[max],
  })
  return <Component>{children}</Component>
}
