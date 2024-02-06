import { useEffect } from "react";
import { HomeStore } from "../stores/HomeStore";

export const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return <div>Home</div>;
};
