import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    font-family: 'Inter', sans-serif;
    margin: auto;
    padding: 10px;
    background: ${({ theme }) => theme.color.whiteLilac};
}
`;