import React from 'react';
import s from './Coin.module.css';
import Bitcoin from './../../../../assets/btc.svg';
import Ethereum from './../../../../assets/eth.png';
import Ripple from './../../../../assets/xrp.png'

const Coin = (props) => {
    
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
        <div className = {s.wrapper}>
            <div className = {s.wrapperUpPart}>
                <div className = {s.curBal}>                
                    <img src={icon(props.fullName)} alt =""></img>               
                    <div className = {s.container}>
                        <div className={s.curUp}>
                            <div>{props.name}</div>
                            <div>{props.amount}</div>
                        </div>  
                        <div className={s.curDown}>
                            <span>{props.fullName}</span>
                            <span>${(props.Price*props.amount).toFixed(2)}</span>
                        </div> 
                    </div>              
                </div>
            </div>
            <div className = {s.wrapperDownPart}>
                <div className = {s.curBal}>                             
                    <div className = {s.container}>
                        <div className={s.price}>
                            <div>{props.Price}</div>
                            <div className={props.profit>=0?s.priceColorPlus:s.priceColorMinus}>{props.profit}%</div>
                        </div>  
                        <div className={s.text}>
                            <span>price</span>
                            <span>Profit/Loss</span>                            
                        </div> 
                    </div>              
                </div>
            </div>
        </div>
    )
}

export default Coin;