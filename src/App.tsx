import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { actions } from './ducks'
import { getCharactersList } from './ducks/selectors'
import { CharactersType } from './types'
import CharactersStyles from './containers/CharactersStyles'
import CharactersDetails from './components/CharactersDetails'

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Montserrat', sans-serif;
      }
     h3, h4 {
      margin: 0;
     }
    `

const App: React.FC = (): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()
  const characters: Array<CharactersType> = useSelector(getCharactersList)

  useEffect((): void => {
    dispatch(actions.fetchCharacters())
  }, [])

  const setSearchValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    dispatch(actions.setSearchValue(value))
  }

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <CharactersStyles characters={characters} setSearchValue={setSearchValue} />
        </Route>
        <Route path="/character/:id" component={CharactersDetails} />
      </Switch>
    </>
  )
}

export default App
