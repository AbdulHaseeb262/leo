import { useEffect, useState } from "react";
import BannerWrapper from "./Banner.style";
import Progressbar from "../../../components/progressbar/Progressbar";
import Countdown from "../../../components/countdown/Countdown";
import PayWith from "../../../components/payWith/PayWith";
import { usePresaleData } from "../../../utils/PresaleContext";
import * as configModule1 from "../../../contracts/config";
import * as configModule2 from "../../../contracts/configBnb";
import { useReadContract } from "wagmi";
import { formatUnits } from "viem";

const Banner = () => {
  const { currentStage, stageEnd } = usePresaleData();

  const [totalToken, setTotalToken] = useState(0);
  const [totalSoldToken, setTotalSoldToken] = useState(0);
  const [progressDone, setProgressDone] = useState(0);

  const { data: eth_tokenDecimalsData } = useReadContract({
    ...configModule1.tokenDecimalsCall,
  });
  const { data: eth_presaleTokenAmountData } = useReadContract({
    ...configModule1.presaleTokenAmountCall,
  });
  const { data: eth_totalSoldData } = useReadContract({
    ...configModule1.totalSoldCall,
  });

  const { data: bnb_tokenDecimalsData } = useReadContract({
    ...configModule2.tokenDecimalsCall,
  });
  const { data: bnb_presaleTokenAmountData } = useReadContract({
    ...configModule2.presaleTokenAmountCall,
  });
  const { data: bnb_totalSoldData } = useReadContract({
    ...configModule2.totalSoldCall,
  });

  useEffect(() => {
    if (
      eth_tokenDecimalsData &&
      eth_presaleTokenAmountData &&
      eth_totalSoldData >= 0 &&
      bnb_tokenDecimalsData &&
      bnb_presaleTokenAmountData &&
      bnb_totalSoldData >= 0
    ) {
      const eth_tokenDecimal = eth_tokenDecimalsData;
      const eth_presaleTokenAmount = formatUnits(
        eth_presaleTokenAmountData,
        eth_tokenDecimal
      );
      const eth_totalSold = formatUnits(eth_totalSoldData, eth_tokenDecimal);
      const bnb_tokenDecimal = bnb_tokenDecimalsData;
      const bnb_presaleTokenAmount = formatUnits(
        bnb_presaleTokenAmountData,
        bnb_tokenDecimal
      );
      const bnb_totalSold = formatUnits(bnb_totalSoldData, bnb_tokenDecimal);

      const _totalToken =
        Number(eth_presaleTokenAmount) + Number(bnb_presaleTokenAmount);
      setTotalToken(_totalToken);

      const _totalTokenSold = Number(eth_totalSold) + Number(bnb_totalSold);
      setTotalSoldToken(_totalTokenSold);

      let _tokenPercent = parseInt((_totalTokenSold * 100) / _totalToken);
      setProgressDone(_tokenPercent > 100 ? 100 : _tokenPercent);
    }
  }, [
    eth_tokenDecimalsData,
    eth_presaleTokenAmountData,
    eth_totalSoldData,
    bnb_tokenDecimalsData,
    bnb_presaleTokenAmountData,
    bnb_totalSoldData,
  ]);

  return (
    <BannerWrapper style={{ backgroundImage: "url('./hero-bg.png')" }}>
      <div className="mb-20 container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-20 text-center">
              <div className="presale-cards-container">
                <div className="info-card">
                  <div className="info-card-header">
                    <h5 className="ff-outfit fw-600 text-white text-uppercase">
                      TRUMPIDENTAL TOWER
                    </h5>
                    <h4 className="text-xs font-kids-magazine p-4 text-stroke-2 drop-shadow-[0px_3px_0px_black]">
  BUY BEFORE THE PRICE INCREASES
</h4>

                    <p className="py-4 titillium-web-bold text-xl text-black font-bold">
                      Get ready for the game-changing P2E 2.0, now with meme elements
                    </p>
                  </div>
                  <div className="info-card-body">
                    <p>
                      A management-style P2E (Play-to-Earn) game where players create and
                      manage their own luxury hotel empire. The name "Trumpidental" is a
                      playful blend of "Trump" and "presidential," adding a meme-inspired
                      quality to the game, while reflecting both the grandeur of
                      presidential life and a humorous, satirical twist. The game draws
                      inspiration from Donald Trump's own success in the hotel and real
                      estate industries, capturing the power and influence that come with
                      running a luxury empire. Players must make strategic decisions to
                      upgrade their hotels, optimize operations, and earn rewards, all
                      while navigating a competitive virtual economy.
                    </p>
                  </div>
                </div>

                <div className="presale-card">
                  <div className="presale-card-header">
                    <h5 className="ff-outfit fw-600 text-white text-uppercase">
                      BUY NOW LIVE
                    </h5>
                  </div>

                  <div className="presale-card-counter">
                    <Countdown endDate={stageEnd} font="title2" />
                  </div>

                  <div className="presale-card-body">
                    <div className="mb-1 d-flex align-items-center justify-content-between flex-wrap">
                      <h5 className="fw-600 text-uppercase text-black">
                        STAGE {currentStage}
                      </h5>
                      <h5 className="fw-600 text-uppercase text-black">
                        {totalSoldToken} / {totalToken}
                      </h5>
                    </div>

                    <div className="mb-35">
                      <Progressbar done={progressDone} variant="green2" />
                    </div>

                    <PayWith variant="v6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;