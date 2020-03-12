import styled from 'styled-components';

const StyledHeaderBottom = styled.div`
    margin-top:20px;
    text-align: center;
  
  .item-list {
    display: inline-block;
    width: auto;
  }
  .item {
    display: inline-block;
    padding: 5px 10px;
    font-weight: bold;
    z-index: 2;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid red;
      cursor:pointer;
    }
  }
`;

export default StyledHeaderBottom;