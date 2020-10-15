import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const Card = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex: 3;
  text-align: center;
  margin: 1rem;
  &:hover {
    opacity: 0.9;
    transition: 0.1s;
  }
`

export const Name = styled.h3`
  color: #000;
  margin: 0;
`
