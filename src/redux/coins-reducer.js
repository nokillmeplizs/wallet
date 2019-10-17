const SET_COINS = 'SET_COINS';

let initialState = {
    coins: [
        {
            id: 1,
            name: "BTC",
            fullName: "Bitcoin",
            amount: "1",
            coinPrice: "6,752.52"
        },
        {
            id: 2,
            name: "ETH",
            fullName: "Ethereum",
            amount: "1",
            coinPrice: "3,122.52"
        },
        {
            id: 3,
            name: "XSR",
            fullName: "Ripple",
            amount: "1",
            coinPrice: "0,2355.43"
        },
        {
            id: 4,
            name: "???",
            fullName: "???",
            amount: "?",
            coinPrice: "??"
        }
    ],
    newCoins:null
};

const coinsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COINS: {
           
            return { ...state, coins: [...state.coins, action.coins] }
        }
        default:
            return state;
    }
}

export const setCoinsAC = (coins) => ({ type: SET_COINS, coins });

export default coinsReducer;