import styled from "styled-components";

const ConnectWalletButtonStyleWrapper = styled.div`
  .connect-wallet-btn {
    background-color: ${({ theme }) =>
      theme.colors.bgPrimary || "rgb(255, 163, 54)"};
    text-transform: uppercase;
    font-family: ${({ theme }) =>
      theme.fonts["kids-magazine"] || "Kids Magazine, sans-serif"};
    font-size: 12px;
    color: #fff; /* Text color set to white */
    padding: 1rem 1.25rem; /* 16px top/bottom, 20px left/right */
    border: 2px solid #000;
    border-radius: 8px;
    transition: background-color 0.3s;
    -webkit-text-stroke: 1px #000;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;

export default ConnectWalletButtonStyleWrapper;
