import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data/",
    apiKey : "8d789224f7c6f20c463be01830653d7016d35b47184764f48c07e0e011f5b6a9"
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


