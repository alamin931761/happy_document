import React from 'react';
import LastPart from './LastPart';
import MiddlePart from './MiddlePart';
import TopPart from './TopPart';

const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <TopPart></TopPart>
            <MiddlePart></MiddlePart>
            <LastPart></LastPart>
        </div>
    );
};

export default Home;