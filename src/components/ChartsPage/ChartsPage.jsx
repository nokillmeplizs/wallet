import React from 'react';
import  HeaderContainer  from './Header/HeaderContainer';
import { ChartContainer } from './Chart/ChartContainer';
//import s from './ChartsPage.module.css';

export const ChartsPage = () => {
    return (
        <div>
            <HeaderContainer />           
            <ChartContainer />
        </div>
    )
}
