import React from 'react';
import Home from '../Home';
import './style.scss';

const App = () =>{
  return(
    <div className="app-component">
      <div className="app-header">
        <div className="app-header-title">Money management website</div>
      </div>
     <Home />
    </div>
  );
}

export default App;