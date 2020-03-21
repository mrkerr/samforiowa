import React from 'react';
import '../css/Header.css'
import header from '../images/well_behaved_women_header.png';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    return(
      <div className='header-image'>
        <img src={header}/>
      </div>
    )};
}

export default Header;
