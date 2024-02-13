import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#1d1d1d",
};

export const GlobalStyled = createGlobalStyle`
${reset}

* {
    /* margin: 0; */
    /* padding: 0; */
    box-sizing: border-box;
}

body {
    background-color: ${mainColors.blackColor};
    letter-spacing: -1px;
    word-break: break-all;
    font-family: "Gowun Dodum", sans-serif;
}

ul, li {
    list-style: none;
}

a {
    text-decoration: none;
    color: white;
}
`;
