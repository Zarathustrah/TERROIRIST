import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import CheeseIndex from './components/CheeseIndex'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cheeses" component={CheeseIndex}/>
      </Switch>    

      
    </BrowserRouter>
    
  );
}

export default App;
