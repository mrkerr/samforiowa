import React from 'react';
import '../css/SamLandingMobile.css'
import Header from './Header'
import SamForIowa from '../images/sam_for_iowa.png'
import CowLogo from '../images/cow_logo_blue.png'
import {Link} from "react-router-dom";

class SamLandingMobile extends React.Component {
  constructor(props){
    super(props);
  }
  

  render() {

    return(
      <div>
        <Header/>
        <div className='grid-container-mobile'>
          <div className='title-mobile'>
            <div className='title-left-align-mobile'>
              <span>Learn Muhr.<br/>Love Muhr.<br/> Vote Muhr.</span>
            </div>
          </div>
          <div className='yellow-bar-mobile'>
          </div>
          <div className='sam-for-iowa-mobile'>
            <img src={SamForIowa}/>
          </div>
          <div className='yellow-bar-two-mobile'>
          </div>
          <div className='short-bio-mobile'>
            <p>I am running for the Iowa House of Representatives as a Democrat in the 12th District, including Audubon, Carroll, and part of Crawford counties.<br/>
               I would be honored to earn your support. 
            </p>
          </div>
          <div className='social-mobile'>
            <p>Connect with Sam</p>
            <p><a href='https://www.facebook.com/samforiowa/' target='_blank'>Facebook</a></p>
            <p><a href='https://twitter.com/MuhrSam' target='_blank'>Twitter</a></p>
            <p>Email: SamForIowa@gmail.com</p>
          </div>
          <div className='yellow-bar-three-mobile'>
          </div>
          <div className='articles-button-mobile'>
            <div className='button-inline-mobile'>
              <Link to='/articles'>
                Check out Sam in the Press!
              </Link>
            </div>
          </div>
          <div className='cow-logo-mobile'>
            <img src={CowLogo}/>
          </div>
        </div>
        <Link to='/articles'>
            <button className="button mt-20" type="submit">Sign in</button>
        </Link>
      </div>
    )};
}

export default SamLandingMobile;
