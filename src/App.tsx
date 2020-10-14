import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { actions } from "./ducks";

import CharactersStyles from "./containers/CharactersStyles";

const App: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch();

  useEffect((): void => {
    console.log("request");
    dispatch(actions.charactersFetch());
  }, []);

  return (
    <div>
      <CharactersStyles />
    </div>
  );
};

export default App;
