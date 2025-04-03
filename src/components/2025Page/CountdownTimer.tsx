import { useState, useEffect, FC } from "react";
import styled from "styled-components";

const CountdownContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  background: linear-gradient(90deg, #4169e1 0%, #da70d6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountdownText = styled.div`
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
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

// Example usage in another file:
/*
import React from 'react';
import CountdownTimer from './CountdownTimer';

const EventPage: React.FC = () => {
  // Set event date to April 30, 2025 at 10:00 AM
  const eventDate = new Date('2025-04-30T10:00:00');
  
  // OR calculate from current date
  // const eventDate = new Date();
  // eventDate.setDate(eventDate.getDate() + 36); // 36 days from now
  // eventDate.setHours(eventDate.getHours() + 12); // Add 12 hours
  
  return (
    <div>
      <h1>Conference 2025</h1>
      <CountdownTimer eventDate={eventDate} />
      <div>Event details...</div>
    </div>
  );
};

export default EventPage;
*/
