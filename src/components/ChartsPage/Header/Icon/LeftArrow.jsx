import React from 'react';
import s from './LeftArrow.module.css';
import left from '../../../../assets/left.svg';
import { NavLink } from 'react-router-dom';


export const LeftArrow = (props) => {
    return (
        <NavLink to="/">
            <div className={s.icon}>
                <img src={left} alt="left"></img>
            </div>
        </NavLink>
    )
}
