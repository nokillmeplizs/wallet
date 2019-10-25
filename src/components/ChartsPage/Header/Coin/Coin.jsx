import React from 'react';
import s from './Coin.module.css';
import { CoinLogo } from '../../../MainPage/Coins/Coin/CoinLogo';
import { AmountCoin } from '../../../MainPage/Coins/Coin/AmountCoin';
import { ProfitCoin } from '../../../MainPage/Coins/Coin/ProfitCoin';


export const Coin = (props) => {   
    return (
        <div className={s.wrapper}>
            <div>
            <CoinLogo fullName={props.fullName} name={props.name} />
            </div>            
            <div className={s.container}>
                <AmountCoin amount={props.amount} />
                <div className={s.flexEnd}><ProfitCoin profit={props.profit}/></div>
            </div>
        </div>
    )
}
