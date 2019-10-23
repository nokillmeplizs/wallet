import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data/"
});

export const coinsApi = {
    getDateCoins() {
        return instance.get("pricemultifull?fsyms=ETH,BTC,XRP&tsyms=USD")
            .then(response => {
                return response.data
            }
            )
    }
}


