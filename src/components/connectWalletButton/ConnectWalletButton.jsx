import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import ConnectWalletButtonStyleWrapper from "./ConnectWalletButton.style";

const ConnectWalletButton = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { isConnected } = useAccount();

  const handleClick = () => {
    if (isConnected && openAccountModal) {
      openAccountModal();
    } else if (!isConnected && openConnectModal) {
      openConnectModal();
    }
  };

  return (
    <ConnectWalletButtonStyleWrapper>
      <button className="connect-wallet-btn" onClick={handleClick}>
        CONNECT WALLET
      </button>
    </ConnectWalletButtonStyleWrapper>
  );
};

export default ConnectWalletButton;
