import styled from "styled-components";
import { routes } from "../routes";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  padding: 20px 5%;
  background-color: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
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
