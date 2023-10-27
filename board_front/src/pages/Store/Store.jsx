import React from 'react';
import RootContainer from '../../components/RootContainer/RootContainer';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { instance } from '../../api/config/instance';
import { useEffect } from 'react';
/** @jsxImportSource @emotion/react */

const SStoreContainer = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
`;

const SProductContainer = css`
    margin: 10px;
    width: 30%;
    height: 120px;
    cursor: pointer;
`;

function Store(props) {
    const getProducts = useQuery(["getProducts"], async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken")
                }
            }
            return await instance.get("/products", option);
        } catch(error) {

        }
    });

    useEffect(() => {
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(iamport);
        }
    }, [])

    return (
        <RootContainer>
            <h1>포인트 충전하기</h1>
            <div css={SStoreContainer}>
                {!getProducts.isLoading && getProducts?.data?.data.map(product => {
                    return <button css={SProductContainer}>{product.productName} Point</button>
                })}
            </div>
        </RootContainer>
    );
}

export default Store;