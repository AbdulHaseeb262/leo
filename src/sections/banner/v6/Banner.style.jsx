import styled from "styled-components";

const BannerWrapper = styled.section`
  /* Changed from specific background-image to using a prop */
  background-image: url('./hero-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  padding: 223px 0 60px 0;
  position: relative;
  z-index: 0;
  overflow: hidden;

  .banner-title {
    margin-bottom: 10px;
    background: linear-gradient(180deg, #fff 0%, rgb(255, 255, 255) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${({ theme }) => theme.fonts.title2};
    font-size: 70px;
    font-weight: 400;
    line-height: 80px;
    color: ${({ theme }) => theme.colors.white};
  }

  .banner-subtitle {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  /* Container for both cards */
  .presale-cards-container {
    display: flex;
    justify-content: center;
    align-items: stretch; /* Changed from flex-start to stretch to ensure same height */
    gap: 30px; /* Increased gap between cards */
    max-width: 1200px;
    border: none;
    margin: 0 auto;
  }

  /* Left info card */
  .info-card {
    flex: 1.75;
    max-width: 800px;
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 232, 193, 0.95); /* Added transparency */
    backdrop-filter: blur(20px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: full; 
    
    
    &-header {
      h5 {
        background: rgb(255, 163, 54); /* Orange banner */
        display: inline-block;
        width: 100%;
        padding: 20px 4px;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        height: 40%;
        font-family: 'Kids Magazine';
        font-size: 24px;
        font-weight: bold;
        margin: 0;
        color: white;
      }
    }
    
    
    &-body {
      padding: 40px;
      color: black !important;
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 26px;
      line-height: 1.7;
      text-align: center; /* Center align text */
      flex-grow: 1; /* Allow body to grow and fill space */
    }
    
    h3{
    font-size: 20px;
    font-weight: 900;
    }
    
    p {
      color: black !important;
      text-align: center !important;
      margin: 0 auto;
      width: 95%;
    }
  }
  /* Right presale card */
  .presale-card {
    flex: 1;
    max-width: 450px;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.95); /* Added transparency */
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure full height */

    &-header {      
      h5 {
        background: rgb(255, 163, 54);
        display: inline-block;
        width: 100%;
        padding: 4px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        height: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin: 0;
      }
    }

    &-counter {
      padding: 0px;
      background: rgba(255, 78, 0, 0.9);
      display: flex;
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      font-weight: bold;
      padding: 0px 0;
    }

    &-body {
      padding: 40px;
      flex-grow: 1; /* Allow body to grow and fill space */
    }
  }

  /* Buy Now button */
  .buy-now-btn {
    width: 100%;
    padding: 15px;
    background: rgb(255, 163, 54);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.title2};
  }

  /* Wallet link */
  .wallet-link {
    color: white;
    text-decoration: underline;
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    .presale-cards-container {
      flex-direction: column;
      align-items: center;
      gap: 30px; /* Maintained gap in mobile view */
    }
    
    .info-card,
    .presale-card {
      width: 100%;
      max-width: 600px;
    }
  }

  @media screen and (max-width: 767px) {
    .banner-title {
      margin-bottom: 10px;
      font-size: 50px;
      line-height: 60px;
    }
  }

  @media screen and (max-width: 575px) {
    .banner-title {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 150px 0 60px 0;

    .banner-title {
      font-size: 32px;
      line-height: 40px;
    }

    .presale-card, .info-card {
      border-radius: 20px;

      h5 {
        font-size: 14px;
        line-height: 24px;
      }

      &-header {
        padding: 0px 0px;
      }

      &-counter {
        padding: 0px;
      }

      &-body {
        padding: 20px;
      }
    }
  }
`;

export default BannerWrapper;