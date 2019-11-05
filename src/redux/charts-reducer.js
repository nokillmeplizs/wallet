import { coinsApi } from '../api/api';

const SET_PROFIT_IN_CURRENCY = 'SET_PROFIT_IN_CURRENCY';

let initialState = [];

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {      
        // case SET_PROFIT_IN_CURRENCY:
        //     return {
        //         ...state,
        //         profitInCurrency: action.profitInUsd
        //     }
        default:
            return state;
    }
}

// export const setPrices = (prices) => ({ type: SET_PRICES, prices });

// export const getDateCoins = () => {
//     return (dispatch) => {
//         coinsApi.getDateCoins().then(data => {
//             const prices = {};
//             const profit = {};
//             const profitInUsd = {};
//             const { RAW } = data;
//             for (let key in RAW) {
//                 profitInUsd[key] = RAW[key].USD.CHANGE24HOUR;
//                 prices[key] = RAW[key].USD.PRICE;
//                 profit[key] = RAW[key].USD.CHANGEPCT24HOUR.toFixed(2);
//             }
//             dispatch(setPrices(prices));
//             dispatch(setProfit(profit));
//             dispatch(setProfitInCurrency(profitInUsd));
//         });
//     }
// }

export default chartsReducer;