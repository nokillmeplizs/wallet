import React from 'react';
import  { connect } from 'react-redux';
import Coins from './Coins';
import { setCoinsAC } from '../../../redux/coins-reducer';

const mapStateToProps = (state) => {
    return {
      coins: state.coins.coins    
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setCoins: (coins) => {
        dispatch(setCoinsAC(coins));
      }
    }
  }
  
const CoinsContainer = connect(mapStateToProps,mapDispatchToProps)(Coins);
  
export default CoinsContainer;



