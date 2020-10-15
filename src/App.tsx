import React, { useEffect, useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { actions } from './ducks';
import { getCharactersList } from './ducks/selectors';
import { CharactersType } from './types';

import CharactersStyles from './containers/CharactersStyles';
import CharactersDetails from './components/CharactersDetails';

const App: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const characters: Array<CharactersType> = useSelector(getCharactersList);

  useEffect((): void => {
    dispatch(actions.fetchCharacters());
  }, []);

  const setSearchValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;

      dispatch(actions.setSearchValue(value));
    },
    [],
  );

  const CharactersRoute: React.FC = (): React.ReactElement => (
    <CharactersStyles characters={characters} setSearchValue={setSearchValue} />
  );

  return (
    <div>
      <Switch>
        <Route exact path="/" component={CharactersRoute} />
        <Route path="/character/:id" component={CharactersDetails} />
      </Switch>
    </div>
  );
};

export default App;
