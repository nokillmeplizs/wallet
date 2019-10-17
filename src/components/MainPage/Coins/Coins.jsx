import React from 'react';
import Coin from './Coin/Coin'
import * as axios from 'axios';


class Coins extends React.Component {    
   
    componentDidMount() {
        axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC&tsyms=USD").then(response => {
             this.props.setCoins(response.data)
            console.log(response.data.RAW.BTC.USD.PRICE)
            console.log(response.data.RAW.BTC.USD.CHANGEPCT24HOUR)

        });
    }

    coins = this.props.coins
    .map(c => <Coin key={c.id} 
                    name={c.name} 
                    fullName={c.fullName}
                    amount={c.amount}
                    coinPrice={c.coinPrice}/>)
    render(){
        return (
            <div className = "CoinsBlock">
            {this.coins}
            </div>
        )
    }
    
}

export default Coins;