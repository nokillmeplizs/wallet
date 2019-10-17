import React from 'react';
import TotalBalance from './TotalBalance/TotalBalance';
import CoinsContainer from './Coins/CoinsContainer';

const MainPage = () => {
    return (
        <div>
            <TotalBalance />
            <CoinsContainer />
        </div>
    )
}

export default MainPage;