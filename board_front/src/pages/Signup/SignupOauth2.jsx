import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from '../../api/config/instance';

function SignupOauth2(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(!window.confirm("등록되지 않은 간편로그인 사용자입니다. 회원등록 하시겠습니까?")){
            window.location.replace("/auth/signin");
        }
    }, [])

    const user = {
        email: "",
        password: "",
        name: searchParams.get("name"),
        nickname: "",
        oauth2Id: searchParams.get("oauth2Id"),
        profileImg: searchParams.get("profileImg"),
        provider: searchParams.get("provider")
    }

    const [ signupUser, setSignupUser ] = useState(user);

    const handleInputChange = (e) => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value
        });
    }

    const handleSigninClick = () => {
        navigate("/auth/signin");
    }

    const handleSignupSubmit = async () => {
        try {
            const response = await instance.post("/auth/signup", signupUser);
        }catch(error) {
            console.error(error);
        }
    }

    return (
        <div>
            <div><input type="email" name='email' placeholder='이메일' onChange={handleInputChange} /></div>
            <div><input type="password" name='password' placeholder='비밀번호' onChange={handleInputChange} /></div>
            <div><input type="text" name='name' placeholder='이름' value={signupUser.name} disabled={true} /></div>
            <div><input type="text" name='nickname' placeholder='닉네임' onChange={handleInputChange} /></div>
            <div><button onClick={handleSignupSubmit}>가입하기</button></div>
            <div><button onClick={handleSigninClick}>로그인</button></div>
        </div>
    );
}

export default SignupOauth2;