import React from 'react';
import SamLandingMobile from './components/SamLandingMobile'
import SamLandingDesktop from './components/SamLandingDesktop'
import MediaQuery from 'react-responsive'
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
