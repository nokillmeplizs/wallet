import React from "react";
import s from './ProfitCoin.module.css';

export const ProfitCoin = (props) => {
    return (
        <div className={props.profit>=0?s.priceColorPlus:s.priceColorMinus}>{props.profit}%</div>
    )
}
