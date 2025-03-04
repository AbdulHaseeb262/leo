import { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderWrapper from "./Header.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import HeaderSocialLinks from "../../../assets/data/headerSocialLinks";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ variant }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            {/* Logo */}
            <div className="gittu-header-left">
              <NavLink className="gittu-header-logo" to="/" end>
                <img src="\logo.png" alt="Logo" />
              </NavLink>
            </div>

            {/* Menu */}
            <div className="gittu-header-center">
              <ul className="gittu-header-menu">
                <li>
                  <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#roadmap" onClick={(e) => handleLinkClick(e, "roadmap")}>
                    ROADMAP
                  </a>
                </li>
                <li>
                  <a href="#tokenomic" onClick={(e) => handleLinkClick(e, "tokenomic")}>
                    TOKENOMICS
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-play"
                    onClick={(e) => handleLinkClick(e, "how-to-play")}
                  >
                    HOW TO PLAY
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleLinkClick(e, "faq")}>
                    FAQS
                  </a>
                </li>
                {variant === "v1" && (
                  <li>
                    <a href={Whitepaper} target="_blank" rel="noreferrer">
                      Whitepaper
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Right Side (Mobile Toggler, Wallet Button, Social Links) */}
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                <div className="connect-wallet-wrapper">
                  {variant === "v1" && <ConnectWalletButton />}
                  {variant === "v2" && <ConnectWalletButton variant="v2" />}
                  {variant === "v3" && <ConnectWalletButton variant="yellow" />}
                  {variant === "v4" && <ConnectWalletButton variant="gradient" />}
                  {variant === "v5" && <ConnectWalletButton variant="v5" />}
                  {variant === "v6" && <ConnectWalletButton variant="v6" />}
                  {variant === "v7" && <ConnectWalletButton />}
                </div>

                {(variant === "v2" ||
                  variant === "v3" ||
                  variant === "v5" ||
                  variant === "v6" ||
                  variant === "v7") && (
                  <ul className="social-links">
                    {HeaderSocialLinks
                      .filter(
                        (socialLinkItem) =>
                          socialLinkItem.title.toLowerCase() !== "discord"
                      )
                      .map((socialLinkItem, i) => (
                        <li key={i}>
                          <a
                            href={socialLinkItem.url}
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon-wrapper"
                          >
                            <img
                              src={socialLinkItem.icon}
                              alt={socialLinkItem.title}
                            />
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
