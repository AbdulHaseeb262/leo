import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  transition: 0.3s;

  &.sticky {
    background: ${({ theme }) => theme.colors.bgHeader};
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    
    @media (min-width: 768px) {
      padding: 0;
    }
  }

  .gittu-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gittu-header-left {
    display: flex;
    align-items: center;
  }

  .gittu-header-logo img {
    width: 80px;
    height: 80px;
  }

  .gittu-header-center {
    display: none;
    
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .gittu-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .gittu-header-right-menu {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* Header Menu Styles */
  .gittu-header-menu {
    display: flex;
    gap: 32px;
    
    li a {
      font-family: "Kids Magazine", serif; /* Matching your global CSS font */
      font-weight: 700;
      font-size: 12px;       /* Smaller text */
      line-height: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 0px 2px 0px black;
      text-decoration: none; /* Remove underline */
      padding: 4px 0;        /* Minimal padding, tweak as desired */
      position: relative;
      
      /* Remove any border or outline pseudo-element */
      &::before {
        content: none;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.textPrimary || theme.colors.white};
      }
    }
  }

  .gittu-header-menu-toggle {
    display: block;
    
    @media (min-width: 1024px) {
      display: none;
    }

    .menu-toggler {
      border: 0;
      padding: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.white};
      font-size: 30px;
    }
  }

  /* Connect Wallet Button */
  .connect-wallet-wrapper button {
    background-color: rgb(255, 163, 54); /* As requested */
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-family: "Kids Magazine", serif;
    font-size: 12px;
    padding: 16px 20px;
    border: 2px solid #000;  /* Black outline on the button */
    border-radius: 8px;
    transition: 0.3s;
    
    &:hover {
      opacity: 0.9;
    }
  }

  /* Social Links */
  .social-links {
    display: flex;
    align-items: center;
    gap: 8px;
    
    li a.social-icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      
      img {
        width: 20px;
        transition: 0.3s;
      }
      
      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .gittu-header-logo {
      max-width: 80px;
    }

    .gittu-header-right {
      gap: 8px;
    }
  }
`;

export default HeaderWrapper;
