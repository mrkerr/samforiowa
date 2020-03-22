import React from 'react';
import SamLandingMobile from './components/SamLandingMobile'
import SamLandingDesktop from './components/SamLandingDesktop'
import Articles from './components/Articles'
import MediaQuery from 'react-responsive'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  return (
      <div className="App">
        <MediaQuery maxDeviceWidth={767}>
          <SamLandingMobile/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
          <SamLandingDesktop/>
        </MediaQuery>
      </div>
  );
}

export default App;
