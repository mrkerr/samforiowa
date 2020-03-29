import React from 'react';
import SamLandingMobile from './components/SamLandingMobile'
import SamLandingDesktop from './components/SamLandingDesktop'
import MediaQuery from 'react-responsive'
import './App.css'

function App() {
  return (
    
      <div className="App">
        <MediaQuery maxDeviceWidth={500}>
          <SamLandingMobile/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={501}>
          <SamLandingDesktop/>
        </MediaQuery>
      </div>
  );
}

export default App;
