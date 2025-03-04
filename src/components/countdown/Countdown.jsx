import { useState, useEffect } from "react";

const Countdown = ({ endDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = endDate * 1000 - now;

      if (difference > 0) {
        return {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
          hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
      }
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    };

    setRemainingTime(calculateTimeLeft());

    const timer = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex justify-center gap-4 py-4 bg-[#FF4500] w-full rounded-t-lg border-b-2 border-b-black">
      <div className="text-center">
        <span className="text-base font-kids-magazine inline-block text-white">
          {remainingTime.days}D
        </span>
      </div>
      <div className="text-center">
        <span className="text-base font-kids-magazine inline-block text-white">
          {remainingTime.hours}H
        </span>
      </div>
      <div className="text-center">
        <span className="text-base font-kids-magazine inline-block text-white">
          {remainingTime.minutes}M
        </span>
      </div>
      <div className="text-center">
        <span className="text-base font-kids-magazine inline-block text-white">
          {remainingTime.seconds}S
        </span>
      </div>
    </div>
  );
};

export default Countdown;
