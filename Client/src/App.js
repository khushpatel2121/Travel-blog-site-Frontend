import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import Register from './components/register2.js';
import Register from './components/Register.js';
import Sign from './components/Sign';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function App() {


const navigate = useHistory();

  const ProtectedRoute = ({children}) =>{
      
    const {currentUser} = useSelector((state)=>state.user);
 
    if(!currentUser){
     return navigate.push('/sign-up')
    }
  
    return children
   }
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

        

          <Route path='/' exact component={Home} />
     

          <Route path='/services' component={Services} />
  

     

          <Route path='/products' component={Products} />
 
          <Route path='/sign-up' component={Sign} />
          <Route path='/register' component={Register} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
