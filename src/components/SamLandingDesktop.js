import React from 'react';
import '../css/SamLandingDesktop.css'
import { Link } from 'react-router-dom';
import Header from './Header'
import SamForIowa from '../images/sam_for_iowa.png'
import CowLogo from '../images/cow_logo_blue.png'

class SamLandingDesktop extends React.Component {
  constructor(props){
    super(props);
  }
  

  render() {

    return(
      <div>
        <Header/>
        <div className='grid-container-desktop'>
          <div className='title-desktop'>
            <div className='title-left-align-desktop'>
              <span>Learn Muhr.<br/>Love Muhr.<br/> Vote Muhr.</span>
            </div>
          </div>
          <div className='yellow-bar-desktop'>
          </div>
          <div className='sam-for-iowa-desktop'>
            <img src={SamForIowa}/>
          </div>
          <div className='short-bio-desktop'>
            <p>I am running for the Iowa House of Representatives as a Democrat in the 12th District, including Audubon, Carroll, and part of Crawford counties.<br/>
               I would be honored to earn your support. 
            </p>
          </div>
          <div className='social-desktop'>
            <p>Connect with Sam</p>
            <p><a href='https://www.facebook.com/samforiowa/' target='_blank'>Facebook</a></p>
            <p><a href='https://twitter.com/MuhrSam' target='_blank'>Twitter</a></p>
            <p>Email: &nbsp;SamForIowa@gmail.com</p>
          </div>
          <div className='yellow-bar-two-desktop'>
          </div>
          <div className='articles-button-desktop'>
            <div className='button-inline'>
              <Link to='/articles'>
                Check out Sam in the Press!
              </Link>
            </div>
          </div>
          <div className='yellow-bar-three-desktop'>
          </div>
          <div className='cow-logo-desktop'>
            <img src={CowLogo}/>
          </div>
        </div>
      </div>
    )};
}

export default SamLandingDesktop;
