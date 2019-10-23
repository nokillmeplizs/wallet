import React from 'react';
import s from './Coin.module.css';
import Bitcoin from './../../../../assets/btc.svg';
import Ethereum from './../../../../assets/eth.png';
import Ripple from './../../../../assets/xrp.png';
import { NavLink } from 'react-router-dom';
import { CoinLogo } from './CoinLogo';
import { AmountCoin } from './AmountCoin';
import { ProfitCoin } from './ProfitCoin';

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
        <NavLink to="/charts">
        <div className = {s.wrapper}>
            <div className = {s.wrapperUpPart}>
                <div className = {s.curBal}> 
                    <div className = {s.containerUp}>    
                        <CoinLogo fullName={props.fullName} name={props.name}/>                                 
                         <div>
                            <AmountCoin amount={props.amount}/>                         
                            <div className={s.curDown}>                         
                                <span>${(props.Price*props.amount).toFixed(2)}</span>
                             </div> 
                        </div>                                        
                       
                    </div>              
                </div>               
            </div>
            <hr className = {s.endLine}/>
            <div className = {s.wrapperDownPart}>
                <div className = {s.curBal}>                             
                    <div className = {s.container}>
                        <div className={s.price}>
                            <div>{props.Price}</div>
                            <ProfitCoin profit={props.profit}/>
                        </div>  
                        <div className={s.text}>
                            <span>price</span>
                            <span>Profit/Loss</span>                            
                        </div> 
                    </div>              
                </div>
            </div>
        </div>
        </NavLink>
    )
}

export default Coin;