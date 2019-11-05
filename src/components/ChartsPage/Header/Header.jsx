import React from 'react';
import { LeftArrow } from './Icon/LeftArrow';
import { Coin } from './Coin/Coin';
import s from './Header.module.css';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {

    componentDidMount() {               
        this.props.getDateCoins();
    }

    coinList = () => {
        return this.props.coins
            .map(coin => <Coin key={coin.id}
                name={coin.name}
                fullName={coin.fullName}
                amount={coin.amount}
                profit={coin.profit} />)
    }

    currentCoin = (id) => {
        return this.props.coins
            .filter(coin => coin.id === +id)
            .map(coin => <Coin key={coin.id}
                name={coin.name}
                fullName={coin.fullName}
                amount={coin.amount}
                profit={coin.profit} />)
    }

    coinId = this.props.match.params.coinId; 

    render() {        
        return (
            <div>
                <LeftArrow />
                <section className={s.coin}>{this.coinList()}</section >
                <div className={s.single}>{this.currentCoin(this.coinId)}</div>

            </div>
        )
    }
}

export default withRouter(Header)


