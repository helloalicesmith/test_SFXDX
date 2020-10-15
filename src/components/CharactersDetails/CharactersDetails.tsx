import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

import { randomInteger } from '../../utils/randomInt'
import { colorArr } from '../../constants'
import Loader from '../Loader'
import { actions } from '../../ducks'
import { getCharacterDetails, getIsDetailsLoading } from '../../ducks/selectors'
import { CharactersType, CharacterDetailsType } from '../../types'

export type RouterProps = {
  id: string
}

export interface CharactersDetailsProps extends RouteComponentProps<RouterProps> {
  character?: CharactersType
}

export type ColorProps = { color: string }

const Wrapper = styled.div`
  text-align: center;
  background: ${(props: ColorProps) => props.color};
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #000;
  padding: 0.25em 1em;
  color: #000;
`
const P = styled.p`
  white-space: pre-wrap;
`

const CharactersDetails: React.FC<CharactersDetailsProps> = (props): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()
  const characterDetails: CharacterDetailsType | null = useSelector(getCharacterDetails)
  const isLoading: boolean = useSelector(getIsDetailsLoading)

  useEffect(() => {
    const { id } = props.match.params

    dispatch(actions.fetchCharacterDetails(id))
  }, [])

  return (
    <>
      <Link to="/">
        <Button>back</Button>
      </Link>
      <Wrapper color={colorArr[randomInteger(0, 9)]}>
        {isLoading && <Loader />}
        {!isLoading && characterDetails && (
          <div>
            <h1>{characterDetails.name}</h1>
            {!!characterDetails.nicknames.length && (
              <>
                <h3>nicknames:</h3>
                <p>{characterDetails.nicknames.join(' ')}</p>
              </>
            )}
            <img src={characterDetails.image_url} alt="characterDetails" />
            <P>{characterDetails.about}</P>
          </div>
        )}
      </Wrapper>
    </>
  )
}

export default CharactersDetails
