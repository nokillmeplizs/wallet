import React from 'react';
import  { connect } from 'react-redux';
import { Coins } from './Coins';
import { getDateCoins } from '../../../redux/coins-reducer';


const mapStateToProps = (state) => {
    return {
      coins: state.coins.coins   
    }
  }
  
  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     setPrices: (prices) => {
  //       dispatch(setPricesAC(prices));
  //     },
  //     setProfit: (profit) => {
  //       dispatch(setProfitAC(profit));
  //     },
  //     setProfitinCurrency: (profit) => {
  //       dispatch(setProfitInCurrencyAC(profit));
  //     }
  //   }
  // }
  
const CoinsContainer = connect(mapStateToProps,{getDateCoins})(Coins);
  
export default CoinsContainer;



