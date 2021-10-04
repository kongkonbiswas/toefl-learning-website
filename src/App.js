
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Service from './components/Service/Service';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Category from './components/Category/Category';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>
          <Route path="/category">
            <Category></Category>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
