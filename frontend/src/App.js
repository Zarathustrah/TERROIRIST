import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Products from './components/Products'
import MemeIndex from './components/memes/MemeIndex'
import MemeShow from './components/memes/MemeShow'
import Register from './components/auth/Register'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/memes/:id" component={MemeShow}/>        
        <Route path="/memes" component={MemeIndex}/>
        <Route path="/register" component={Register}/>
        
      </Switch>    
    </BrowserRouter>
    
  );
}

export default App;
