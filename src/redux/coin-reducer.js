const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    coins: [
        { id: 1, name: "BTC", FullName: "Bitcoin", amount: "0.241234523",coinPrice:"6,752.52"},
        { id: 2, name: "ETH", FullName: "Ethereum", amount: "2.6545634",coinPrice:"3,122.52"},
        { id: 3, name: "XSR", FullName: "Ripple", amount: "135.554323",coinPrice:"0,2355.43"}
    ]
};

const coinReducer = (state = initialState, action) => {
    
    switch (action.type) {
      
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default coinReducer;