import { useEffect } from "react";
import { HomeStore } from "../stores/HomeStore";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import styled from "styled-components";

const Title = styled.h2``;

export const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header></Header>
      <Title>
        <input
          type="text"
          value={store.query}
          onChange={store.setQuery}
        ></input>
      </Title>

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
