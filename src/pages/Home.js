import { useEffect } from "react";
import { HomeStore } from "../stores/HomeStore";
import { Link } from "react-router-dom";

export const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery}></input>
      {store.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        );
      })}
    </div>
  );
};
