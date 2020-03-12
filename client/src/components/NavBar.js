import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import StyledNavBar from './styles/StyledNavBar';
import AuthGuardRoute from './AuthGuardRoute';

function NavBar(props) {
  const {isLogin, Logout} = useContext(AuthContext);
  
  return (
    <StyledNavBar>
      <div className="nav-left">
        <span className="nav-item">무료 배송</span>
        <span className="nav-item">평생 AS 서비스</span>
      </div>
      <div className="nav-center">
        <span>boutique</span>
      </div>
      <div className="nav-right">
        {isLogin ? <NavLink to="/" className="nav-link" onClick={() => { Logout()}}>로그아웃</NavLink> :
          <NavLink className="nav-link" to="/login">로그인</NavLink>}
          <NavLink className="nav-link" to="/mypage">마이페이지</NavLink>
          <NavLink className="nav-link" to="/mypage-orderlist">주문배송</NavLink>
          <NavLink className="nav-link" to="/faq">고객센터</NavLink>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;