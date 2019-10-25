import React from 'react';
import Coin from './Coin/Coin';

export class Coins extends React.Component {

    componentDidMount() {
        this.props.getDateCoins();        
    }

    coinList() {       
        return this.props.coins
            .map(coin => <Coin key={coin.id}
                id={coin.id}
                name={coin.name}
                fullName={coin.fullName}
                amount={coin.amount}
                Price={coin.Price}
                profit={coin.profit} />)
    }

    render() {
        return (
            <div className="CoinsBlock">
                {this.coinList()}
            </div>
        )
    }
}

