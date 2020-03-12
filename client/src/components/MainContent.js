import React from 'react';

import HeaderRouter from './HeaderRouter';
import ContentRouter from './ContentRouter';

function MainContent(props) {
  return (
    <div>
      <HeaderRouter />
      <ContentRouter />
    </div>
  );
}

export default MainContent;