import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeaderBottom from './styles/StyledHeaderBottom';

function HeaderBottom(props) {
  return (
    <StyledHeaderBottom>
      <ul className="item-list">
        <Link to="/" className="item">의류</Link>
        <Link to="/" className="item">슈즈</Link>
        <Link to="/" className="item">가방</Link>
      </ul>
    </StyledHeaderBottom>
  );
}

export default HeaderBottom;