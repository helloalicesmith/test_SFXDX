import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { Link, RouteComponentProps } from 'react-router-dom'

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

const CharactersDetails: React.FC<CharactersDetailsProps> = (props): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()
  const characterDetails: CharacterDetailsType | null = useSelector(getCharacterDetails)
  const isLoading: boolean = useSelector(getIsDetailsLoading)

  useEffect(() => {
    const { id } = props.match.params

    dispatch(actions.fetchCharacterDetails(id))
  }, [])

  return (
    <div>
      <Link to="/">back</Link>
      {isLoading && <Loader />}
      {!isLoading && characterDetails && (
        <div>
          <h1>{characterDetails.name}</h1>
          {!!characterDetails.nicknames.length && (
            <>
              <h3>nicknames</h3>
              <h4>{characterDetails.nicknames.join(' ')}</h4>
            </>
          )}
          <img src={characterDetails.image_url} alt="characterDetails" />
          <p>{characterDetails.about}</p>
        </div>
      )}
    </div>
  )
}

export default CharactersDetails
