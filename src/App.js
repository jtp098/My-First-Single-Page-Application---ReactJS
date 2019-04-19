import React, { Component } from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import BlogPost2 from './components/BlogPost2';
import BlogPost1 from './components/BlogPost1';
import BlogPost3 from './components/BlogPost3';
import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/BlogPost1' component={BlogPost1} /> 
        <Route path='/BlogPost2' component={BlogPost2} />
        <Route path='/BlogPost3' component={BlogPost3} />
        <Footer/>
      </div>
    
      </BrowserRouter>
    );
  }
}

export default App;
