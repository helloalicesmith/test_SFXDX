import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import { CharactersType } from '../../types';

export type CharactersStylesProps = {
  characters: Array<CharactersType>;
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharactersStyles: React.FC<CharactersStylesProps> = ({
  characters,
  setSearchValue,
}): React.ReactElement => (
  <>
    <h1>list styles</h1>
    <input placeholder="search by name" onChange={setSearchValue} />

    {characters.map(
      (character: CharactersType): React.ReactElement => (
        <Link to={`/character/${character.mal_id}`} key={character.mal_id}>
          {character.name}
          <LazyLoad>
            <img src={character.image_url} alt="character" />
          </LazyLoad>
        </Link>
      ),
    )}
  </>
);

export default CharactersStyles;
