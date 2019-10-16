import React from 'react';
import Coin from './Coin/Coin'

const Coins = (props) => {
    return (
        <div className = "CoinsBlock">
            <Coin />
            <Coin />
            <Coin />
        </div>
    )
}

export default Coins;