import React from 'react';
import { LeftArrow } from './Icon/LeftArrow';
import { Coin } from './Coin/Coin';
import s from './Header.module.css';

export class Header extends React.Component{

    componentDidMount() {
        this.props.getDateCoins();
    }
   
    coinList = () => {
        return this.props.coins
        .map(coin => <Coin key={coin.id}
            name={coin.name}
            fullName={coin.fullName}
            amount={coin.amount}            
            profit={coin.profit} />)
    }    

    render() {
    return (
        <div>
            <LeftArrow /> 
            <section  className={s.coin}>{this.coinList()}</section >           
            {/* <section class="coins">
                <div class="coin_content"></div>
                <div class="coin_content"></div>
                <div class="coin_content"></div>
            </section> */}
        </div>
    )
}
}

