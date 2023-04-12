import P from 'prop-types'
import * as Styled from 'styled-components'

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      { children }
    </Styled.Container>
  )
}

TextComponent.protoTypes = {
  children: P.node.isRequired,
}