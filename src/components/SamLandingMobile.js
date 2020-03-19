import React from 'react';
import '../css/SamLanding.css'
import Typed from 'react-typed';

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
          <p>In the meantime, &nbsp;follow along on the <a href='https://www.facebook.com/samforiowa/' target='_blank'>Sam For Iowa</a> Facebook page</p>
        </div>
      </div>
    )};
}

export default SamLandingMobile;
