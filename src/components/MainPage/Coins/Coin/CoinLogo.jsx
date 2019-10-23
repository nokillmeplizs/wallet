import React from "react";
import s from './CoinLogo.module.css';
import Bitcoin from './../../../../assets/btc.svg';
import Ethereum from './../../../../assets/eth.png';
import Ripple from './../../../../assets/xrp.png';

export const CoinLogo = (props) => {
    console.log(props)

    let icon = (coinFullname) =>{
        switch(coinFullname){
         case "Bitcoin":
            return Bitcoin;
         case "Ethereum":
             return Ethereum;
         case "Ripple":
                 return Ripple;
         default:
              return "https://www.freepngimg.com/thumb/symbol/88475-exclamation-icons-text-question-mark-computer-red-thumb.png"
        }       
      }

    return (
        <div className = {s.curBal}>
            <img src={icon(props.fullName)} alt =""></img>
            <div>
                <div className={s.curUp}>{props.name}</div>
                <div className={s.curDown}>{props.fullName}</div>
            </div>  
        </div>        
    )
}

