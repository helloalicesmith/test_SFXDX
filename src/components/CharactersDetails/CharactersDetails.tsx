import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'

import { randomInteger } from '../../utils/randomInt'
import { colorArr } from '../../constants'
import Loader from '../Loader'
import { actions } from '../../ducks'
import { getCharacterDetails, getIsDetailsLoading } from '../../ducks/selectors'
import { CharactersType, CharacterDetailsType } from '../../types'

import { Wrapper, Button, P } from './styles'

export type RouterProps = {
  id: string
}

export interface CharactersDetailsProps extends RouteComponentProps<RouterProps> {
  character: CharactersType
}

const CharactersDetails: React.FC<CharactersDetailsProps> = (props): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()
  const characterDetails: CharacterDetailsType | null = useSelector(getCharacterDetails)
  const isLoading: boolean = useSelector(getIsDetailsLoading)

  useEffect((): void => {
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
