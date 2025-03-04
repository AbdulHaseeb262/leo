// contract abi json
import erc20ContractAbi from "./erc20Abi.json";
import TokenContractAbi from "./TokenContractAbi.json";
import PresaleContractAbi from "./PresaleContractAbi.json";

//network link
export const networkLink = "https://sepolia.etherscan.io/tx";

//token contract address
const tokenContractAddress = "0xA587aCa78e6Ecf63eF43091a527360b048B93Ded";
const usdtContractAddress = "0x239D2c5C552BdcA54F021800F22EEe4dD46e77C5";
export const presaleContractAddress = "0x19578071ea528308585277eDb66E3B5A4B0fD470";

//contract chainid
const contractChainId = 11155111;

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
  chainId: contractChainId,
};

//token name read
export const tokenNameCall = {
  ...tokenContractConfig,
  functionName: "name",
  watch: true,
};

//token symbol read
export const tokenSymbolCall = {
  ...tokenContractConfig,
  functionName: "symbol",
  watch: true,
};

//token decimals read
export const tokenDecimalsCall = {
  ...tokenContractConfig,
  functionName: "decimals",
  watch: true,
};

//token balanceOf read
export const tokenBalanceOfCall = {
  ...tokenContractConfig,
  functionName: "balanceOf",
  watch: true,
};

//Usdt contract configuration
export const usdtContractConfig = {
  address: usdtContractAddress,
  abi: erc20ContractAbi,
  chainId: contractChainId,
};

//usdt name read
export const usdtNameCall = {
  ...usdtContractConfig,
  functionName: "name",
  watch: true,
};

//usdt symbol read
export const usdtSymbolCall = {
  ...usdtContractConfig,
  functionName: "symbol",
  watch: true,
};

//usdt decimals read
export const usdtDecimalsCall = {
  ...usdtContractConfig,
  functionName: "decimals",
  watch: true,
};

//usdt balanceOf read
export const usdtBalanceOfCall = {
  ...usdtContractConfig,
  functionName: "balanceOf",
  watch: true,
};

//usdt allowance read
export const usdtAllowanceCall = {
  ...usdtContractConfig,
  functionName: "allowance",
  watch: true,
};

//usdt approve write
export const usdtApproveCall = {
  ...usdtContractConfig,
  functionName: "approve",
  watch: true,
};

//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
  chainId: contractChainId,
};

//presale token amount read
export const presaleTokenAmountCall = {
  ...presaleContractConfig,
  functionName: "presaleTokenAmount",
  watch: true,
};

//token total sold read
export const totalSoldCall = {
  ...presaleContractConfig,
  functionName: "totalSold",
  watch: true,
};

//maximum stage read
export const maxStageCall = {
  ...presaleContractConfig,
  functionName: "maxStage",
  watch: true,
};

//current stage id read
export const currentStageIdCall = {
  ...presaleContractConfig,
  functionName: "getCurrentStageIdActive",
  watch: true,
};

//stage info read
export const currentStageInfoCall = {
  ...presaleContractConfig,
  functionName: "stages",
  watch: true,
};

//buy token write
export const buyTokenCall = {
  ...presaleContractConfig,
  functionName: "buyToken",
  watch: true,
};

//buyTokenWithUsdt write
export const buyTokenWithUsdtCall = {
  ...presaleContractConfig,
  functionName: "buyTokenWithUsdt",
  watch: true,
};

//ETH to USD exchange rate
export const GetUSDExchangeRate = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=ETH",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.USD;
    })
    .catch((error) => {
      return "error", error;
    });
};
