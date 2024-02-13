import { useEffect } from "react";
import { HomeStore } from "../stores/HomeStore";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import styled from "styled-components";

const Title = styled.h2`
  padding: 40px 0;
  text-align: center;
  /* background-color: aliceblue; */
  h2 {
    font-family: "Gowun Dodum", sans-serif;
    font-size: 36px;
    color: white;
  }
`;

export const Home = () => {
  const store = HomeStore();

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <Header></Header>
      <Title>
        <h2>Search For A Coin</h2>
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
