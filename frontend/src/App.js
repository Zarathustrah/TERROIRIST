import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import ErrorPage from './components/common/ErrorPage'
import WineIndex from './components/wines/WineIndex'
import WineShow from './components/wines/WineShow'


const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines" component={WineIndex}/>
        <Route path="/wines/:id" component={WineShow}/>
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </main>
  
  </BrowserRouter>
)

export default App
