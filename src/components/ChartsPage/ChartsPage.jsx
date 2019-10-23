import React from 'react';
import left from '../../assets/left.svg';
import s from './ChartsPage.module.css';
import { NavLink } from 'react-router-dom';

export const ChartsPage = () => {
    return (
        <div>
            <NavLink to="/">
                <div className={s.icon}>
                    <img src={left} alt="left"></img>
                </div>
            </NavLink>
            <div>скролинг валют</div>
            <div>текущая валюта</div>
            <div>График валют</div>
        </div>
    )
}
