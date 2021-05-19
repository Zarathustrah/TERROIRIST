import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import WineIndex from './components/wines/WineIndex'


const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines" component={WineIndex}/>
      </Switch>
    </main>
  
  </BrowserRouter>
)

export default App
