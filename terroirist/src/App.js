import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Products from './components/Products'
import MemeIndex from './components/memes/MemeIndex'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/memes" component={MemeIndex}/>
      </Switch>    

       
    </BrowserRouter>
    
  );
}

export default App;
