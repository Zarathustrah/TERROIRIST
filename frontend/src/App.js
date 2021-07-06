import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// * Pages
import Home from './components/common/Home'
import ErrorPage from './components/common/ErrorPage'
import WineIndex from './components/wines/WineIndex'
import WineShow from './components/wines/WineShow'

// * Components
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'

const App = () => (
  <BrowserRouter>

    <Navbar />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wines/:id" component={WineShow}/>
        <Route path="/wines" component={WineIndex}/>
        <Route path="/*" component={ErrorPage} />
      </Switch>
      <Footer />
    </main>
  
  </BrowserRouter>
)

export default App
