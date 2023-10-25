import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RootContainer from '../../components/RootContainer/RootContainer';

function BoardList(props) {

    const { category } = useParams();
    console.log(category)

    return (
        <RootContainer>
            
        </RootContainer>
    );
}

export default BoardList;