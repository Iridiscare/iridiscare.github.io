import React, { Component } from 'react';
import { render } from 'react-dom';
import Recorder from './components/Recorder';

import { BrowserRouter as Router, 
  Route, 
  Routes } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/result" render={(props) => <Report {...props}/>} exact />
          <Route path="/app" element={<Recorder/>} exact />
        </Routes>
      </Router>
      
    )
  }
}
render(<App />, document.getElementById('root'));
