import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Products from './components/Products'
import MemeIndex from './components/memes/MemeIndex'
import MemeShow from './components/memes/MemeShow'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/memes" component={MemeIndex}/>
        <Route path="/memes/:id" component={MemeShow}/>
      </Switch>    
    </BrowserRouter>
    
  );
}

export default App;
