import React from 'react';
import s from './TotalBalance.module.css';
import search from './../../../assets/search.svg';
import ring from './../../../assets/ring.svg';

const TotalBalance = (props) => {
    return (
        <div className = {s.wrapper}>
            <div className = {s.navBar}>
                <span className = {s.search}><img src={search} alt="search"></img></span>
                <span className = {s.ring}><img src={ring} alt="ring"></img></span>
            </div>
            <div className = {s.text}>Your total balance</div>
            <div className = {s.balance}>$1,632.95</div>

            <div className = {s.text}>24h Changes</div>
            <div className = {s.profit}>+ $37.55 ↑</div>
        </div>
    )
}

export default TotalBalance;