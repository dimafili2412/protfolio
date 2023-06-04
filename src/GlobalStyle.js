import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    /* --- scroll-bar --- */
    /* width */
    ::-webkit-scrollbar {
      width: 0.5rem;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background.primary}; 
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.background.secondary}; 
      border-radius: 20px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.colors.background.tertiary};
    }
  }
`;

export default GlobalStyle;
