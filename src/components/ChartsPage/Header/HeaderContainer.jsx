import React from 'react';
import  { connect } from 'react-redux';
import Header from './Header';
import { getDateCoins } from '../../../redux/coins-reducer';


const mapStateToProps = (state) => {
    return {
      coins: state.coins.coins   
    }
  }

const HeaderContainer = connect(mapStateToProps,{getDateCoins})(Header);
  
export default HeaderContainer;
