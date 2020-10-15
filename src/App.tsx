import React from 'react'
import { Switch, Route } from 'react-router-dom'

import CharactersStyles from './containers/CharactersStyles'
import CharactersDetails from './components/CharactersDetails'
import GlobalStyle from './theme/GlobalStyle'

const App: React.FC = (): React.ReactElement => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={CharactersStyles} />
      <Route path="/character/:id" component={CharactersDetails} />
    </Switch>
  </>
)

export default App
