import React from 'react';
import TotalBalanceContainer from './TotalBalance/TotalBalanceContainer';
import CoinsContainer from './Coins/CoinsContainer';

const MainPage = () => {
    return (
        <div>
            <TotalBalanceContainer />
            <CoinsContainer />
        </div>
    )
}

export default MainPage;