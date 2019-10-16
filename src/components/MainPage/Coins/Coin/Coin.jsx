import React from 'react';
import s from './Coin.module.css';
import Bitcoin from './../../../../assets/btc.svg';

const Coin = (props) => {
    return (
        <div className = {s.wrapper}>
            <div className = {s.wrapperUpPart}>
                <div className = {s.curBal}>                
                    <img src={Bitcoin} alt =""></img>               
                    <div className = {s.container}>
                        <div className={s.curUp}>
                            <div>BTC</div>
                            <div>0.21234523</div>
                        </div>  
                        <div className={s.curDown}>
                            <span>Bitcoin</span>
                            <span>$,1238.62</span>
                        </div> 
                    </div>              
                </div>
            </div>
            <div className = {s.wrapperDownPart}>
                <div className = {s.curBal}>                             
                    <div className = {s.container}>
                        <div className={s.price}>
                            <div>$6,752.24</div>
                            <div className={s.priceColor}>+2.75%</div>
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