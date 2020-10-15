import React from 'react'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CharactersType } from '../../types'

export type CharactersStylesProps = {
  characters: Array<CharactersType>
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex: 3;
  text-align: center;
  margin: 1rem;
  &:hover {
    opacity: 0.9;
    transition: 0.1s;
  }
`

const Name = styled.h3`
  color: #000;
  margin: 0;
`

const CharactersStyles: React.FC<CharactersStylesProps> = ({ characters, setSearchValue }): React.ReactElement => {
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

      <Wrapper>
        {characters.map(
          (character: CharactersType): React.ReactElement => (
            <Link to={`/character/${character.mal_id}`} key={character.mal_id} style={{ textDecoration: 'none' }}>
              <Card>
                <Name>{character.name}</Name>
                <LazyLoad offset={-100}>
                  <img src={character.image_url} alt="character" />
                </LazyLoad>
              </Card>
            </Link>
          ),
        )}
      </Wrapper>
    </>
  )
}

export default CharactersStyles
