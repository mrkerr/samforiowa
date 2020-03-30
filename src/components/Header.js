import React from 'react';
import '../css/Header.css'
import header from '../images/well_behaved_women_header.png';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'


class Header extends React.Component {
  constructor(props){
    super(props);
    this.header_image = props.header_image ? props.header_image : header;
  }

  render() {
    const header_image = this.header_image;
    return(
      <div>
        <div className='topbar'>
          <div className='topbar-buttons'>
            <MediaQuery maxDeviceWidth={800}>
              <span className='topbar-button-mobile'><Link to='/articles'>Articles</Link></span>
              <span className='topbar-button-mobile'><Link to='/'>Home</Link></span>
            </MediaQuery>
            <MediaQuery minDeviceWidth={801}>
              <span className='topbar-button-desktop'><Link to='/articles'>Articles</Link></span>
              <span className='topbar-button-desktop'><Link to='/'>Home</Link></span>
            </MediaQuery>
          </div>
        </div>
        <div className='header-image'>
          <img src={header_image}/>
        </div>
      </div>
    )};
}

export default Header;
