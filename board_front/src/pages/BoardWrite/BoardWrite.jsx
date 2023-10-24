import React, { useEffect } from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import ReactQuill from 'react-quill';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

const buttonContainer = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 50px;
    width: 100%;
`;

function BoardWrite(props) {

    const modules = {
        toolbar: {
            container: [
                [{header: [1, 2, 3, false]}],
                ["bold", "underline"],
                ["image"]
            ]
        }
    }

    const handleTitleInput = () => {

    }

    const handleContentInput = (value) => {
        console.log(value);
    }

    return (
        <RootContainer>
            <div>
                <h1>글쓰기</h1>
                <div><input type="text" name='title' placeholder='제목' onChange={handleTitleInput}/></div>
                <div>
                    <ReactQuill 
                        style={{boxSizing: "border-box", width: "100%", height: "400px"}} 
                        modules={modules} 
                        onChange={handleContentInput} />
                </div>
                <div css={buttonContainer}>
                    <button>작성하기</button>
                </div>
            </div>
        </RootContainer>
    );
}

export default BoardWrite;