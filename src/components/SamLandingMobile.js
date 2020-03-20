import React from 'react';
import '../css/SamLanding.css'
import Typed from 'react-typed';
import {LANDING_PAGE_TEXT as LANDING_PAGE_TEXT} from "../constants/LandingPageConstants"

class SamLandingMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMeantime: false
    }
  }

  showInMeantime(){
    let x = 5
    this.setState({showMeantime: !this.state.showMeantime})
  }

  render() {
    const meantimeClassNames = this.state.showMeantime ? 'in-the-meantime show-meantime' : 'in-the-meantime hide-meantime'

    return(
      <div className='mobile-landing-coming-soon'>
        <Typed
          strings={['Sam For Iowa <br/><br/> coming soon...']}
          typeSpeed={50}
          showCursor={false}
          contentType= {'html'}
          onComplete={this.showInMeantime.bind(this)}
        />
        <div className={meantimeClassNames}>
          {LANDING_PAGE_TEXT}
        </div>
      </div>
    )};
}

export default SamLandingMobile;
