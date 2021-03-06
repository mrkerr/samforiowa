import React from 'react';
import ArticlesDesktop from '../ArticlesDesktop'
import ArticlesMobile from '../ArticlesMobile'
import MediaQuery from 'react-responsive'

function ArticlesRouting() {
  return (
    
      <div className="App">
        <MediaQuery maxDeviceWidth={800}>
          <ArticlesMobile/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={801}>
          <ArticlesDesktop/>
        </MediaQuery>
      </div>
  );
}

export default ArticlesRouting;
