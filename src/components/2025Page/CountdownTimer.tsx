import { useState, useEffect, FC } from "react";
import styled from "styled-components";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../../styles/GlobalStyle";

const CountdownContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  background: linear-gradient(90deg, #4169e1 0%, #da70d6 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    padding: 12px 0;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 10px 15px;
  }
`;

const CountdownText = styled.div`
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;

  @media (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 20px;
    letter-spacing: 0.3px;
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    letter-spacing: 0.2px;
  }
`;

interface CountdownTimerProps {
  eventDate: Date;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate initially
    calculateTimeLeft();

    // Update every second
    const timerId = setInterval(calculateTimeLeft, 1000);

    // Cleanup
    return () => clearInterval(timerId);
  }, [eventDate]);

  return (
    <CountdownContainer>
      <CountdownText>
        {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes}{" "}
        Minutes until the event begins
      </CountdownText>
    </CountdownContainer>
  );
};

export default CountdownTimer;
