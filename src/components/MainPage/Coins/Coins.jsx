import React from 'react';
import Coin from './Coin/Coin'
import * as axios from 'axios';


export class Coins extends React.Component {

    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC,XRP&tsyms=USD").then(response => {
            const prices = {};
            let profit = {};
            let profitInUsd = {};
            const { RAW } = response.data;
            for (let key in RAW) {
                profitInUsd[key] = RAW[key].USD.CHANGE24HOUR;
                prices[key] = RAW[key].USD.PRICE;
                profit[key] = RAW[key].USD.CHANGEPCT24HOUR.toFixed(2);
            }            
            this.props.setPrices(prices);
            this.props.setProfit(profit);
            this.props.setProfitinCurrency(profitInUsd);

        });

    }

    coinList() {
        return this.props.coins
            .map(coin => <Coin key={coin.id}
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

