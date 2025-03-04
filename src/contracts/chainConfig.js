import * as ConfigModule1 from "./config";
import * as ConfigModule2 from "./configBnb";

import Icon1 from "../assets/images/token/eth.png";
import Icon2 from "../assets/images/token/bnb.png";

export const chainInfo = [
  {
    id: 1,
    icon: Icon1,
    name: "Sepolia",
    chainId: 11155111,
    configModule: ConfigModule1,
    payWith: "ETH",
    title: "Buy on ETH",
    buyChainId: 97,
    buyTitle: "Buy on BNB",
    buyIcon: Icon2,
  },
  {
    id: 2,
    icon: Icon2,
    name: "BNB Smart Chain Testnet",
    chainId: 97,
    configModule: ConfigModule2,
    payWith: "BNB",
    title: "Buy on BNB",
    buyChainId: 11155111,
    buyTitle: "Buy on ETH",
    buyIcon: Icon1,
  },
];

export const chainConfig = (chainId) => {
  const config = chainInfo.find((item) => item.chainId === chainId);

  return config || chainInfo[0];
};
