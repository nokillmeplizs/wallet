import React from 'react';
import { connect } from 'react-redux';
import { TotalBalance } from './TotalBalance';

const mapStateToProps = (state) => {
    return {
      state: state.coins.coins,
      profit: state.coins.profitInCurrency  
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {     
    }
  }
  
const TotalBalanceContainer = connect(mapStateToProps,mapDispatchToProps)(TotalBalance);
  
export default TotalBalanceContainer;