import  * as Styled from './styles'

export const Heading = ({ children, light=false }) => {
  return <Styled.Title light={light}>{ children }</Styled.Title>
}