import axios from "axios";
import { create } from "zustand";

export const HomeStore = create((set) => ({
  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    console.log(res);
  },
}));
