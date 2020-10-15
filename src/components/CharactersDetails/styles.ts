import styled from 'styled-components'

export type ColorProps = { color: string }

export const Wrapper = styled.div`
  text-align: center;
  background: ${(props: ColorProps) => props.color};
`

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000;
  padding: 0.25em 1em;
  color: #000;
`
export const P = styled.p`
  text-align: center;
  white-space: pre-wrap;
`
