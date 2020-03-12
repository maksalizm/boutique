import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: relative;
  padding: 5px 25px;
  background-color: #000;
  color: #fff;
  font-size: 13px;
  
  &:after {
    content: '';
    display: table;
    clear: both;
  }
  .nav-item  {
  position: relative;
  padding: 0 5px;
  user-select: none;
  }
  .nav-link {
    position: relative;
    display: inline-block;
    padding: 0 5px;
    user-select: none;
  }
  .nav-left {
    float: left;
    position: relative;
  }
  .nav-center {
    position: relative;
    width: 500px;
    margin: 0 auto;
    text-align: center;
  }
  .nav-right {
    position: absolute;
    top: 5px;
    right: 25px;
  }
`;

export default StyledNavBar;
