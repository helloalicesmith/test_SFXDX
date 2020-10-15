import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'

import { getCharactersList, getIsLoading } from '../../ducks/selectors'
import Loader from '../../components/Loader'
import { CharactersType } from '../../types'
import { actions } from '../../ducks'

import { Wrapper, Card, Name } from './styles'

const CharactersStyles: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()
  const characters: Array<CharactersType> = useSelector(getCharactersList)
  const isLoading: boolean = useSelector(getIsLoading)

  useEffect((): void => {
    dispatch(actions.fetchCharacters())
  }, [])

  const setSearchValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    dispatch(actions.setSearchValue(value))
  }

  return (
    <>
      <h1>
        <span role="img" aria-label="img">
          🌸
        </span>
        One-Punch Man Wiki
        <span role="img" aria-label="img">
          🌸
        </span>
      </h1>
      <input placeholder="search by name" onChange={setSearchValue} />

      {isLoading && <Loader />}
      {!isLoading && (
        <Wrapper>
          {characters.map(
            (character: CharactersType): React.ReactElement => (
              <Link to={`/character/${character.mal_id}`} key={character.mal_id} style={{ textDecoration: 'none' }}>
                <Card>
                  <Name>{character.name}</Name>
                  <LazyLoad height={350} offset={-100}>
                    <img src={character.image_url} alt="character" />
                  </LazyLoad>
                </Card>
              </Link>
            ),
          )}
        </Wrapper>
      )}
    </>
  )
}

export default CharactersStyles
