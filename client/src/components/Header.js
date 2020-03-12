import React from 'react';
import styled from 'styled-components';
import HeaderBottom from './HeaderBottom';

const Title = styled.p`
  padding-top: 15px;
  font-size: 48px;
  color: #000;
  text-align: center;
  font-weight: bold;
`;

const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  border-bottom: 4px solid #000;
`;

function Header(props) {
  return (
    <StyledHeader>
      <Title>boutique</Title>
      <HeaderBottom />
    </StyledHeader>
  );
}

export default Header;