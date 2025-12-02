'use client';

import { useState } from "react";
import { DayCell } from "./MonthGrid/DayCell/Day";
import { Month } from "./MonthGrid/Month";
import { Header } from "./Header/Header";
import { addMonths, subMonths } from "date-fns";

export default function Home() {

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  }

  return (
    <div className="container">
      <Header
      currentDate={currentDate} 
      onPrev={handlePrevMonth} 
      onNext={handleNextMonth}
      />
      <Month currentDate={currentDate} />
    </div>
  );
}
