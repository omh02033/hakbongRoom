import React, { useState } from 'react';
import styled from '@emotion/styled';
import { api } from 'api';
import { setCookie } from 'api';
import { toast } from 'react-toastify';

import dimiback from "stylesheets/assets/dimiback.svg";
import hakbong from "stylesheets/assets/hakbong.jpg";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DimiBackground = styled.img`
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: -1;
`;

const LoginContainer = styled.div`
    width: 70%;
    height: 60%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 15px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
`;
const LoginBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Hakbong = styled.div`
    width: 50%;
    height: 100%;
    opacity: 0.7;
    position: relative;
    background: url(${hakbong}) 50%/ cover border-box padding-box;
    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        border: 25px solid #fff;
        filter: blur(5px);
    }
`;

const LoginTable = styled.form`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

const LoginField = styled.input`
    outline: none;
    border: none;
    padding: 15px;
    width: 80%;
    background: #00000022;
    border-radius: 5px;
`;
const LoginSubmit = styled.input`
    background: #ef007c99;
    padding: 15px;
    color: #fff;
    font: 15px Apple SD Gothic Neo B;
    width: 80%;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
`;

const Login: React.FC = () => {
    const [userId, setUserId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    
    const submit = (e: any) => {
        e.preventDefault();
        if(!userId || !pwd) return;

        api.post('/auth/login', {
            uid: userId,
            pwd
        })
        .then(res => {
            if(res.data.success) {
                setCookie('token', res.data.token);
                window.location.href = '/';
            } else if(res.data.message) {
                toast.warning(res.data.message);
            }
        });
    }

    return (
        <Container>
            <LoginContainer>
                <LoginBox>
                    <LoginTable onSubmit={submit}>
                        <LoginField
                        type="text"
                        placeholder='디미고인 아이디'
                        onChange={(e) => {setUserId(e.target.value);}}
                        value={userId} />
                        <LoginField
                        type="password"
                        placeholder='디미고인 비밀번호'
                        onChange={(e) => {setPwd(e.target.value);}}
                        value={pwd} />
                        <LoginSubmit type="submit" value="로그인" />
                    </LoginTable>
                </LoginBox>
                <Hakbong />
            </LoginContainer>
            <DimiBackground src={dimiback} />
        </Container>
    );
}

export default Login;