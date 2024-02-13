import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  /* background-color: rebeccapurple; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "Gowun Dodum", sans-serif;
  font-size: 24px;
  font-weight: 900;
  /* background-color: aliceblue; */
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>TRENDING CRYPTOs</Link>
      </Logo>
    </SHeader>
  );
};
