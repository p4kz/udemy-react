import P from 'prop-types'
import * as Styled from 'styled-components'

export const Dummy = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{ children }</h1>
    </Styled.Container>
  )
}

Dummy.protoTypes = {
  children: P.node.isRequired,
}