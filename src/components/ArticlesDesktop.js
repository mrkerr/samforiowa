import React from 'react';
import '../css/ArticlesDesktop.css'
import VoteMuhr from '../images/facebook_vote_muhr.png'
import Header from './Header'

class ArticlesDesktop extends React.Component {
  constructor(props){
    super(props);
  }
  

  render() {

    return(
      <div>
        <Header header_image={VoteMuhr}/>
        <div className='articles-yellow-bar-desktop'></div>
        <div className='articles-title-desktop'>
          <h1>Sam Muhr in the Press</h1>
        </div>
        <div className='articles-yellow-bar-desktop'></div>

        <div className='articles-wrapper-desktop'>
          <div className='articles-date-desktop'>
            <p>
              <span>March 16th, 2020</span><br/><br/>
              <span>Carroll Times Herald</span>
            </p>
          </div>
          <div className='articles-content-desktop'>
              <span className='articles-content-title-desktop'>Exira Democrat running for Audubon-Carroll-Crawford House seat</span><br/>
                <p>
                Sam Muhr is a candidate for the Iowa House.

                With six minutes to spare.

                The 31-year-old Exira Democrat, a political activist who has been active in Iowa campaigns, delivered her nomination papers to the Secretary of State’s Office at 4:54 Friday, minutes before the state office filing deadline.&nbsp;&nbsp;<a href='https://www.carrollspaper.com/news/exira-democrat-running-for-audubon-carroll-crawford-house-seat/article_6fcee95e-67bc-11ea-a703-33e83c4f5cb7.html?fbclid=IwAR10kPCSba8ho-Tgw8VwVUG-nxlhODpWNazrjvQ0gpukC6w317ec9co-0Kc' target='_blank'>read more</a>
            </p>
          </div>
        </div>
      </div>
    )};
}

export default ArticlesDesktop;
