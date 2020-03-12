import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';

const StyledLogin = styled.div`
  width: 600px;
  margin: 10px auto;
  padding: 40px 80px 20px;
  border: 2px solid #cccccc;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #dedede;
`;

const Title = styled.p`
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
`;

const InputBox = styled.div`
  &+& {
    margin-top: 30px;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 50px;
  padding: 10px 15px;
  background-color: #ffffff;
  border: 1px solid #c0c0c0;
  font-size: 20px;
  color: #bbb;
  &:hover {
    color: #ffffff;
    background-color: #dedede;
    border: 1px solid #c0c0c0;
  }
`;

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {Login} = useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();
  
  const handleSubmit = (e) => {
    let { from } = location.state || { from: { pathname: "/" }};
    e.preventDefault();
    Login(
        {username, password},
        () => {
          history.replace(from);
        }
      )
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <StyledLogin>
        <InputBox>
          <Input value={username} onChange={e => setUsername(e.target.value)} placeholder="아이디" id="username" />
        </InputBox>
        <InputBox>
          <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="비밀번호" id="password" />
        </InputBox>
        <Button>로그인</Button>
      </StyledLogin>
    </form>
  );
}

export default Login;