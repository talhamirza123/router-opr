import logo from './logo.svg';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import  { NotFound } from './pages/NotFound';
import { Post } from './pages/Post';

function App() {
  
  
  const [login , setlogin ] = useState(false);
  
  return (
    <BrowserRouter basename="/tutorial">
     <div className="App">
  <Header />
    
    
    <button onClick={() => setlogin(!login)}>
    {login ? "log out " : "login"}
    </button>
    
    
    <Switch>
    
    <Route path="/" component={Home} exact />
    <Route path="/About" component={About} />
    
    
    
    <Route path="/Profile"> <Profile login={login}/> </Route>
    <Route path="/Post/:id" component={Post} />
    <Route component={NotFound} />
    </Switch>
    </div>
   </BrowserRouter>
   
  );
}

export default App;
