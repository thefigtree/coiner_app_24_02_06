import axios from "axios";
import { create } from "zustand";

export const HomeStore = create((set) => ({
  coins: [],
  query: "",

  setQuery: (e) => {
    set({ query: e.target.value });
    HomeStore.getState().searchCoins();
  },

  searchCoins: async () => {
    const { query } = HomeStore.getState();
    // console.log(query);
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );
    console.log(res);
  },

  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
      };
    });

    set({ coins });
  },
}));
