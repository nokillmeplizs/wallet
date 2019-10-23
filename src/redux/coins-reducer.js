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
            profit : null
        },
        {
            id: 2,
            name: "ETH",
            fullName: "Ethereum",
            amount: 1,
            Price: "3,122.52",
            profit : null
        },
        {
            id: 3,
            name: "XRP",
            fullName: "Ripple",
            amount: 1,
            Price: "0,2355.43",
            profit : null
        }
    ],
    profitInCurrency:null
      
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

export const setPricesAC = (prices) => ({ type: SET_PRICES, prices });
export const setProfitAC = (profit) => ({ type: SET_PROFIT, profit });
export const setProfitInCurrencyAC = (profitInUsd) => ({ type: SET_PROFIT_IN_CURRENCY, profitInUsd });

export default coinsReducer;