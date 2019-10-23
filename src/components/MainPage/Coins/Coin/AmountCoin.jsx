import React from "react";
import s from './AmountCoin.module.css';

export const AmountCoin = (props) => {
    return (
        <div className={s.curUp}>
            {props.amount}
        </div>
    )
}