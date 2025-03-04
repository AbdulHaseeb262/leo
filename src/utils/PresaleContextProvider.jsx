import React, { useEffect, useState } from "react";
import { PresaleContext } from "./PresaleContext";
import Notification from "../components/notification/Notification";
import { chainInfo, chainConfig } from "../contracts/chainConfig";
import {
  useAccount,
  useBalance,
  useChainId,
  useReadContract,
  useSwitchChain,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { formatEther, formatUnits, parseEther } from "viem";

const PresaleContextProvider = ({ children }) => {
  const chainId = useChainId();
  const [configModule, setConfigModule] = useState(
    chainConfig(chainId).configModule
  );
  const ethChainId = chainInfo[0].chainId;
  const bnbChainId = chainInfo[1].chainId;
  const [buyOnItem, setBuyOnItem] = useState(chainConfig(chainId).buyChainId);
  const [buyOnText, setBuyOnText] = useState(chainConfig(chainId).buyTitle);
  const [buyOnIcon, setBuyOnIcon] = useState(chainConfig(chainId).buyIcon);
  const [selectedImg, setSelectedImg] = useState(chainConfig(chainId).icon);
  const [payWithText, setPayWithText] = useState(chainConfig(chainId).payWith);
  const [titleText, setTitleText] = useState(chainConfig(chainId).title);
  const [IsActiveBuyOnEth, setIsActiveBuyOnEth] = useState(false);
  const [IsActiveBuyOnBnb, setIsActiveBuyOnBnb] = useState(true);
  const [isUsdtActive, setIsUsdtActive] = useState(false);

  // handleBuyOn switch buy on item
  const handleBuyOn = (itemId) => {
    if (itemId == ethChainId) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchChain({ chainId: ethChainId });
      setConfigModule((prev) => chainConfig(ethChainId).configModule);
      makeEmptyInputs();
    }

    if (itemId == bnbChainId) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchChain({ chainId: bnbChainId });
      setConfigModule((prev) => chainConfig(ethChainId).configModule);
      makeEmptyInputs();
    }
  };

  // variables
  const [userChainId, setUserChainId] = useState(chainConfig(chainId).chainId);
  const [userBalance, setUserBalance] = useState("0");
  const [maxStage, setMaxStage] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentBonus, setCurrentBonus] = useState("0");
  const [currentPrice, setCurrentPrice] = useState("0.001");
  const [stageEnd, setStageEnd] = useState(1734976800);
  const [nextStage, setNextStage] = useState(0);
  const [nextPrice, setNextPrice] = useState("0.002");
  const [tokenName, setTokenName] = useState("Mague TOKEN");
  const [tokenSymbol, setTokenSymbol] = useState("MAG");
  const [presaleToken, setPresaleToken] = useState(1000000);
  const [tokenSold, setTokenSold] = useState(0);
  const [tokenPercent, setTokenPercent] = useState(0);
  const [tokenDecimals, setTokenDecimals] = useState(18);
  const [tokenSubDecimals, setTokenSubDecimals] = useState(0);
  const [usdExRate, setUsdExRate] = useState(0);
  const [paymentUsd, setPaymentUsd] = useState(0);
  const [paymentPrice, setPaymentPrice] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [bonusAmount, setBonusAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [presaleStatus, setPresaleStatus] = useState(null);
  const [usdtDecimals, setUsdtDecimals] = useState(18);
  const [usdtAllowance, setUsdtAllowance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);

  // switch network
  const { switchChain } = useSwitchChain();

  // users wallet read
  const { address: addressData } = useAccount();
  const { data: balanceData } = useBalance({
    address: addressData,
  });

  // token contract read
  const { data: tokenNameData } = useReadContract({
    ...configModule.tokenNameCall,
  });
  const { data: tokenSymbolData } = useReadContract({
    ...configModule.tokenSymbolCall,
  });
  const { data: tokenDecimalsData } = useReadContract({
    ...configModule.tokenDecimalsCall,
  });

  // Usdt contract data interaction
  const { data: usdtDecimalsData } = useReadContract({
    ...configModule.usdtDecimalsCall,
  });

  const { data: usdtAllowanceData } = useReadContract({
    ...configModule.usdtAllowanceCall,
    args: [addressData, configModule.presaleContractAddress],
  });

  const { data: usdtBalanceOfData } = useReadContract({
    ...configModule.usdtBalanceOfCall,
    args: [addressData],
  });

  // presale contract read
  const { data: presaleTokenAmountData } = useReadContract({
    ...configModule.presaleTokenAmountCall,
  });
  const { data: totalSoldData } = useReadContract({
    ...configModule.totalSoldCall,
  });
  const { data: maxStageData } = useReadContract({
    ...configModule.maxStageCall,
  });
  const { data: currentStageIdData } = useReadContract({
    ...configModule.currentStageIdCall,
  });
  const { data: currentStageInfoData } = useReadContract({
    ...configModule.currentStageInfoCall,
    args: [currentStageIdData],
  });

  const { data: nextStageInfoData } = useReadContract({
    ...configModule.currentStageInfoCall,
    args: [nextStage],
  });

  // buy token write
  const {
    data: buyTokenData,
    writeContract,
    isPending: buyTokenIsLoading,
    isSuccess: buyTokenIsSuccess,
    error: buyTokenError,
  } = useWriteContract();

  // make empty inputs
  const makeEmptyInputs = () => {
    setPaymentAmount(0);
    setBuyAmount(0);
    setBonusAmount(0);
    setTotalAmount(0);
    setPaymentPrice(0);
  };

  // handle payment input
  const handlePaymentInput = (e) => {
    let _inputValue = e.target.value;
    setPaymentAmount(_inputValue);

    const _ethToUsd = _inputValue * usdExRate;
    const _getToken = parseInt(_ethToUsd / currentPrice);

    setBuyAmount(_getToken);
    setTotalAmount(_getToken);

    setPaymentPrice(_inputValue);

    if (_inputValue == "") {
      setPresaleStatus(null);

      setBuyAmount(0);
      setBonusAmount(0);
      setTotalAmount(0);
      setPaymentPrice(0);
    } else if (parseFloat(userBalance) < parseFloat(_inputValue)) {
      setPresaleStatus("Insufficient funds in your wallet");
    } else {
      if (_getToken > 0) {
        setPresaleStatus(null);
      } else {
        setPresaleStatus("Please buy at least 1 token!");

        setBuyAmount(0);
        setBonusAmount(0);
        setTotalAmount(0);
        setPaymentPrice(0);
      }
    }
  };

  // buy token function
  const buyToken = () => {
    if (paymentAmount != "") {
      setPresaleStatus(null);

      writeContract({
        ...configModule.buyTokenCall,
        args: [buyAmount],
        value: parseEther(paymentPrice.toString()),
      });

      makeEmptyInputs();
    } else {
      setPresaleStatus("Please enter pay amount!");
    }
  };

  //buy token with usdt
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPresaleBuyCall, setIsPresaleBuyCall] = useState(false);

  const {
    data: approveUsdtData,
    writeContract: approveUsdtWrite,
    isPending: approveUsdtIsPending,
    isError: approveUsdtIsErrro,
    error: approveUsdtError,
    isSuccess: approveUsdtIsSuccess,
  } = useWriteContract();

  const { isLoading: isApprovalLoading, isSuccess: isApprovalSuccess } =
    useWaitForTransactionReceipt({
      hash: approveUsdtData,
    });

  const {
    data: buyTokenWithUsdtData,
    writeContract: buyTokenWithUsdtWrite,
    isPending: buyTokenWithUsdtIsLoading,
    isSuccess: buyTokenWithUsdtIsSuccess,
    error: buyTokenWithUsdtError,
  } = useWriteContract();

  // handle payment input usdt
  const handlePaymentInputUsdt = (e) => {
    let _inputValue = e.target.value;
    setPaymentAmount(_inputValue);

    const _getToken = parseInt(_inputValue / currentPrice);

    setBuyAmount(_getToken);
    setTotalAmount(_getToken);

    setPaymentPrice(_inputValue);

    if (_inputValue == "") {
      setPresaleStatus(null);

      setBuyAmount(0);
      setBonusAmount(0);
      setTotalAmount(0);
      setPaymentPrice(0);
    } else if (usdtBalance < Number(_inputValue)) {
      setPresaleStatus("Not enough USDT in your wallet!");
    } else {
      if (_getToken > 0) {
        setPresaleStatus(null);
      } else {
        setPresaleStatus("Please buy at least 1 token!");

        setBuyAmount(0);
        setBonusAmount(0);
        setTotalAmount(0);
        setPaymentPrice(0);
      }
    }
  };

  // buy token with usdt function
  const buyTokenWithUsdt = () => {
    if (paymentAmount != "" || isProcessing) {
      setPresaleStatus(null);

      if (usdtBalance < paymentPrice) {
        setPresaleStatus("Not enough USDT in your wallet!");
      } else {
        if (isProcessing || usdtAllowance >= paymentPrice) {
          buyTokenWithUsdtWrite({
            ...configModule.buyTokenWithUsdtCall,
            args: [buyAmount],
          });

          setIsPresaleBuyCall(true);
          setIsProcessing(false);
        } else {
          const _spendar = configModule.presaleContractAddress;
          const _amount = paymentPrice * 10 ** usdtDecimals;

          approveUsdtWrite({
            ...configModule.usdtApproveCall,
            args: [_spendar, _amount],
          });

          setIsProcessing(true);
        }
      }

      makeEmptyInputs();
    } else {
      setPresaleStatus("Please Enter Payment Amount!");
    }
  };

  const buyTokenWithUsdtToken = () => {
    buyTokenWithUsdtWrite({
      ...configModule.buyTokenWithUsdtCall,
      args: [buyAmount],
    });

    setIsPresaleBuyCall(true);
  };

  // buy token notification
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [notificationDone, setNotificationDone] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const buyTokenLoadingMsg = (textMsg) => {
    setIsActiveNotification(true);
    setNotificationMsg(textMsg);
  };

  const buyTokenSuccessMsg = () => {
    setNotificationDone(true);
    setNotificationMsg("Your transaction has been successfully completed");
  };

  useEffect(() => {
    if (buyTokenIsLoading) {
      buyTokenLoadingMsg("Transaction Processing. Click “Confirm”.");
    }

    if (buyTokenError) {
      setIsActiveNotification(false);
      setPresaleStatus(buyTokenError?.shortMessage);
    }

    if (buyTokenIsSuccess) {
      buyTokenSuccessMsg();

      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    if (isApprovalLoading) {
      buyTokenLoadingMsg(
        "Transaction Processing. Please wait for confirmation."
      );
    }

    if (isApprovalSuccess && !isPresaleBuyCall) {
      buyTokenLoadingMsg("Transaction Processing.");

      buyTokenWithUsdtToken();
    }

    if (approveUsdtIsPending) {
      setIsPresaleBuyCall(false);
      buyTokenLoadingMsg("Approval Processing. Click “Confirm”.");
    }

    if (buyTokenWithUsdtIsLoading) {
      buyTokenLoadingMsg("Transaction Processing. Click “Confirm”.");
    }

    if (buyTokenWithUsdtError) {
      setIsActiveNotification(false);
      setPresaleStatus(buyTokenWithUsdtError?.shortMessage);
    }

    if (approveUsdtError) {
      buyTokenLoadingMsg(
        approveUsdtError?.shortMessage || approveUsdtError?.message
      );

      const timeoutId = setTimeout(() => {
        setIsActiveNotification(false);
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    if (buyTokenWithUsdtIsSuccess && isPresaleBuyCall) {
      buyTokenSuccessMsg();

      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [
    isActiveNotification,
    notificationDone,
    notificationMsg,
    buyTokenData,
    buyTokenIsLoading,
    buyTokenError,
    buyTokenIsSuccess,
    isApprovalLoading,
    isApprovalSuccess,
    isPresaleBuyCall,
    approveUsdtIsPending,
    buyTokenWithUsdtIsLoading,
    buyTokenWithUsdtError,
    approveUsdtError,
    buyTokenWithUsdtIsSuccess,
  ]);

  // update variables with contracts data
  useEffect(() => {
    if (chainId) {
      setUserChainId(chainId);
      const config = chainConfig(chainId);
      setConfigModule((prev) => config.configModule);
      setSelectedImg(config.icon);
      setBuyOnItem(config.buyChainId);
      setBuyOnText(config.buyTitle);
      setBuyOnIcon(config.buyIcon);
      setPayWithText(config.payWith);
      setTitleText(config.title);
    }

    if (balanceData) {
      const _value = formatUnits(balanceData.value, balanceData.decimals);
      const _balance = Number(_value).toFixed(2);
      setUserBalance(`${_balance} ${balanceData.symbol}`);
    }

    if (tokenNameData) {
      setTokenName(tokenNameData);
    }

    if (tokenSymbolData) {
      setTokenSymbol(tokenSymbolData);
    }

    if (tokenDecimalsData) {
      const _subDecimal = 18 - tokenDecimalsData;
      setTokenDecimals(tokenDecimalsData);
      setTokenSubDecimals(_subDecimal);
    }

    if (usdtDecimalsData) {
      setUsdtDecimals(usdtDecimalsData);
    }

    if (usdtBalanceOfData && usdtDecimalsData) {
      const _balance = formatUnits(usdtBalanceOfData, usdtDecimalsData);
      const _result = Number(_balance);
      setUsdtBalance(_result);
    }

    if (usdtAllowanceData && usdtDecimalsData) {
      const _allowance = formatUnits(usdtAllowanceData, usdtDecimalsData);
      const _result = Number(_allowance);
      setUsdtAllowance(_result);
    }

    if (presaleTokenAmountData) {
      const tmp = formatEther(presaleTokenAmountData);
      setPresaleToken(tmp / 10 ** tokenSubDecimals);
    }

    if (totalSoldData >= 0) {
      const tmp = formatEther(totalSoldData);
      setTokenSold(tmp / 10 ** tokenSubDecimals);
    }

    if (maxStageData) {
      setMaxStage(maxStageData.toString());
    }

    if (currentStageIdData) {
      setCurrentStage(currentStageIdData.toString());

      const tmp = parseInt(currentStageIdData);
      setNextStage(tmp + 1);

      if (maxStage < tmp + 1) {
        setNextStage(tmp);
      }
    }

    if (currentStageInfoData) {
      const tmp = formatEther(currentStageInfoData[1]);
      setCurrentPrice(tmp.toString());
      setStageEnd(currentStageInfoData[3].toString());
    }

    if (nextStageInfoData) {
      const tmp = formatEther(nextStageInfoData[1]);
      setNextPrice(tmp.toString());
    }

    let _tokenPercent = parseInt((tokenSold * 100) / presaleToken);
    setTokenPercent(_tokenPercent);

    if (_tokenPercent > 100) {
      setTokenPercent(100);
    }

    configModule.GetUSDExchangeRate().then((res) => {
      setUsdExRate(parseFloat(res));
    });

    let pay = parseFloat(usdExRate * paymentPrice).toFixed(2);
    setPaymentUsd(pay);
  }, [
    chainId,
    configModule,
    tokenNameData,
    tokenSymbolData,
    tokenDecimalsData,
    presaleTokenAmountData,
    totalSoldData,
    maxStageData,
    currentStageIdData,
    currentStageInfoData,
    nextStageInfoData,
    tokenSold,
    presaleToken,
    maxStage,
    usdExRate,
    paymentPrice,
    usdtBalanceOfData,
    usdtDecimalsData,
    usdtAllowanceData,
  ]);

  return (
    <PresaleContext.Provider
      value={{
        configModule,
        handleBuyOn,
        IsActiveBuyOnEth,
        setIsActiveBuyOnEth,
        IsActiveBuyOnBnb,
        setIsActiveBuyOnBnb,
        isUsdtActive,
        setIsUsdtActive,
        switchChain,
        buyOnItem,
        setBuyOnItem,
        buyOnText,
        setBuyOnText,
        buyOnIcon,
        setBuyOnIcon,
        selectedImg,
        setSelectedImg,
        payWithText,
        titleText,
        bnbChainId,
        ethChainId,
        userChainId,
        userBalance,
        maxStage,
        currentStage,
        currentBonus,
        currentPrice,
        stageEnd,
        nextStage,
        nextPrice,
        tokenName,
        tokenSymbol,
        presaleToken,
        tokenSold,
        tokenPercent,
        tokenDecimals,
        tokenSubDecimals,
        usdExRate,
        paymentUsd,
        paymentPrice,
        paymentAmount,
        buyAmount,
        bonusAmount,
        totalAmount,
        presaleStatus,
        setPresaleStatus,
        makeEmptyInputs,
        handlePaymentInput,
        handlePaymentInputUsdt,
        buyToken,
        buyTokenData,
        buyTokenIsLoading,
        buyTokenIsSuccess,
        buyTokenError,
        buyTokenWithUsdt,
      }}
    >
      {children}

      {/* notification modal */}
      {isActiveNotification && (
        <Notification
          notificationDone={notificationDone}
          textMessage={notificationMsg}
        />
      )}
    </PresaleContext.Provider>
  );
};

export default PresaleContextProvider;
