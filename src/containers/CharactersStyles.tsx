import React from "react";

import CharactersDetails from "../components/CharactersDetails";
import { CharactersType } from "../types";

export type CharactersStylesProps = {
  characters: Array<CharactersType>;
  setSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CharactersStyles: React.FC<CharactersStylesProps> = ({
  characters,
  setSearchValue
}): React.ReactElement => {
  return (
    <>
      <h1>list styles</h1>
      <input placeholder="search by name" onChange={setSearchValue} />

      {characters.map(
        (character: CharactersType): React.ReactElement => (
          <CharactersDetails key={character.mal_id} character={character} />
        )
      )}
    </>
  );
};

export default CharactersStyles;
