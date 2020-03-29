import React from 'react';
import ArticlesDesktop from '../ArticlesDesktop'
import ArticlesMobile from '../ArticlesMobile'
import MediaQuery from 'react-responsive'

function ArticlesRouting() {
  return (
    
      <div className="App">
        <MediaQuery maxDeviceWidth={500}>
          <ArticlesMobile/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={501}>
          <ArticlesDesktop/>
        </MediaQuery>
      </div>
  );
}

export default ArticlesRouting;
