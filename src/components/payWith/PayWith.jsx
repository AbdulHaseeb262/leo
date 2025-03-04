import PayWithStyleWrapper from "./PayWith.style";
import StatusIcon from "../../assets/images/icons/status.png";
import UsdtImg from "../../assets/images/token/usdt.png";
import { usePresaleData } from "../../utils/PresaleContext";

const PayWith = ({ variant }) => {
  const {
    // State and handlers (unchanged)
    isUsdtActive,
    setIsUsdtActive,
    makeEmptyInputs,
    currentPrice,
    tokenSymbol,
    paymentAmount,
    totalAmount,
    presaleStatus,
    handlePaymentInput,
    handlePaymentInputUsdt,
    buyToken,
    buyTokenWithUsdt,
    payWithText,
    selectedImg,
  } = usePresaleData();

  return (
    <PayWithStyleWrapper variant={variant}>
      {/* Top text (unchanged) */}
      {variant === "v1" && (
        <div className="mb-8 text-center">
          <h4 className="ff-title fw-600 text-white text-uppercase">
            1 {tokenSymbol} = {currentPrice} USD
          </h4>
        </div>
      )}

      {/* BUY ON ETH + Icon Buttons (as per screenshot) */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 items-center justify-between mb-7">
        {/* 
          If you need dynamic chain switching, 
          replace this <select> with your Dropdown component 
          and apply these same Tailwind classes 
        */}
        <select className="w-[218px] p-3 border border-black shadow-[2px_2px_0px_black] outline-none text-black text-sm">
          <option>BUY ON ETH</option>
          {/* Add more options if needed */}
        </select>

        <div className="flex gap-[8px]">
          {/* First icon button (e.g., BNB) */}
          <button
            onClick={() => {
              setIsUsdtActive(false);
              makeEmptyInputs();
            }}
            className={`p-[10px] inline-block cursor-pointer border-2 
              ${
                !isUsdtActive
                  ? "border-black" // Active style: black border
                  : "border-black/30" // Inactive style
              }
            `}
          >
            {/* Show your "BNB" icon or selectedImg here */}
            <img src={selectedImg} alt="icon" />
          </button>

          {/* Second icon button (USDT) */}
          <button
            onClick={() => {
              setIsUsdtActive(true);
              makeEmptyInputs();
            }}
            className={`p-[10px] inline-block cursor-pointer border-2
              ${
                isUsdtActive
                  ? "border-[rgb(255, 163, 54)] bg-[#FFA336]/10" // Active style
                  : "border-black/30"                 // Inactive style
              }
            `}
          >
            <img src={UsdtImg} alt="icon" />
          </button>
        </div>
      </div>

      {/* Pay & Get Token Inputs (with text-left alignment) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pay Token Input */}
        <div className="text-left">
          <label className="text-sm titillium-web-bold text-black pb-2 block text-left">
            Pay token ({isUsdtActive ? "USDT" : payWithText})
          </label>
          <input
            type="number"
            placeholder="0"
            value={paymentAmount}
            onChange={isUsdtActive ? handlePaymentInputUsdt : handlePaymentInput}
            className="w-full p-3 border border-black shadow-[2px_2px_0px_black] outline-none text-black text-sm placeholder:text-black font-bold text-left"
          />
        </div>

        {/* Get Token Input */}
        <div className="text-left">
          <label className="text-sm titillium-web-bold text-black pb-2 block text-left">
            Get token ({tokenSymbol})
          </label>
          <input
            type="number"
            placeholder="0"
            value={totalAmount}
            disabled
            className="w-full p-3 border border-black shadow-[2px_2px_0px_black] outline-none text-black text-sm placeholder:text-black font-bold text-left"
          />
        </div>
      </div>

      {/* Presale status message (unchanged) */}
      {presaleStatus && (
        <div className="presale-item-msg mt-4">
          <div className="presale-item-msg__content flex items-center gap-2">
            <img src={StatusIcon} alt="icon" />
            <p>{presaleStatus}</p>
          </div>
        </div>
      )}

      {/* BUY NOW button (matching the image) */}
      <button
        onClick={isUsdtActive ? buyTokenWithUsdt : buyToken}
        className="mt-5 block w-full rounded-lg border border-black 
                   text-xl font-bold py-4 
                   bg-[#FFA336] text-white 
                   relative overflow-hidden"
        style={{
          boxShadow: "0px 2px 0px 0px #000000"
        }}
      >
        <span className="relative z-10 font-bold tracking-wider text-stroke text-stroke-black uppercase">
          BUY NOW
        </span>
      </button>
      
      {/* Don't have a wallet option */}
      <div className="mt-3 text-center">
        <a href="#" className="text-black underline font-medium text-sm">
          Don't have a wallet?
        </a>
      </div>
    </PayWithStyleWrapper>
  );
};

export default PayWith;