import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "./ducks";
import { getCharactersList } from "./ducks/selectors";
import { CharactersType } from "./types";

import CharactersStyles from "./containers/CharactersStyles";

const App: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const characters: Array<CharactersType> = useSelector(getCharactersList);

  useEffect((): void => {
    dispatch(actions.fetchCharacters());
  }, []);

  const setSearchValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    dispatch(actions.setSearchValue(value));
  };

  return (
    <div>
      <CharactersStyles
        characters={characters}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default App;
