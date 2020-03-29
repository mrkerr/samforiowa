import React from 'react';
import '../css/Header.css'
import header from '../images/well_behaved_women_header.png';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.header_image = props.header_image ? props.header_image : header;
  }

  render() {
    const header_image = this.header_image;
    return(
      <div className='header-image'>
        <img src={header_image}/>
      </div>
    )};
}

export default Header;
