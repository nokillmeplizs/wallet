import { coinsApi } from '../api/api';

const SET_PRICES = 'SET_PRICES';
const SET_PROFIT = 'SET_PROFIT';
const SET_PROFIT_IN_CURRENCY = 'SET_PROFIT_IN_CURRENCY';

let initialState = {
    coins: [
        {
            id: 1,
            name: "BTC",
            fullName: "Bitcoin",
            amount: 0.34324234,
            Price: "6,752.52",
            profit: null
        },
        {
            id: 2,
            name: "ETH",
            fullName: "Ethereum",
            amount: 1,
            Price: "3,122.52",
            profit: null
        },
        {
            id: 3,
            name: "XRP",
            fullName: "Ripple",
            amount: 1,
            Price: "0,2355.43",
            profit: null
        }
    ],
    profitInCurrency: null

};

const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICES:
            return {
                ...state, coins: state.coins.map(function (coin) {
                    if (action.prices[coin.name]) {
                        coin.Price = action.prices[coin.name];
                    }
                    // action.prices.map(function (e) {
                    //     for (let prop in e) {
                    //         if (prop === coin.name) {
                    //             coin.Price = e[prop];
                    //         }
                    //     }
                    //     return e;
                    // })
                    return coin;
                })
            }
        case SET_PROFIT:
            return {
                ...state, coins: state.coins.map(function (coin) {
                    if (action.profit[coin.name]) {
                        coin.profit = action.profit[coin.name];
                    }
                    return coin;
                })
            }
        case SET_PROFIT_IN_CURRENCY:
            return {
                ...state,
                profitInCurrency: action.profitInUsd
            }
        default:
            return state;
    }
}

export const setPrices = (prices) => ({ type: SET_PRICES, prices });
export const setProfit = (profit) => ({ type: SET_PROFIT, profit });
export const setProfitInCurrency = (profitInUsd) => ({ type: SET_PROFIT_IN_CURRENCY, profitInUsd });

export const getDateCoins = () => {
    return (dispatch) => {
        coinsApi.getDateCoins().then(data => {
            const prices = {};
            const profit = {};
            const profitInUsd = {};
            const { RAW } = data;
            for (let key in RAW) {
                profitInUsd[key] = RAW[key].USD.CHANGE24HOUR;
                prices[key] = RAW[key].USD.PRICE;
                profit[key] = RAW[key].USD.CHANGEPCT24HOUR.toFixed(2);
            }
            dispatch(setPrices(prices));
            dispatch(setProfit(profit));
            dispatch(setProfitInCurrency(profitInUsd));
        });
    }
}

export default coinsReducer;