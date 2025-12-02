'use client';

import { useState } from "react";
import { Month } from "./MonthGrid/Month";
import { Header } from "./Header/Header";
import { addMonths, subMonths } from "date-fns";

export default function Home() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  }

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    console.log("クリックされた日:", date);
  };

  return (
    <div className="container">
      <Header
      currentDate={currentDate} 
      onPrev={handlePrevMonth} 
      onNext={handleNextMonth}
      />
      <Month
      currentDate={currentDate}
      selectedDate={selectedDate}
      onDateClick={handleDateClick}
      />
    </div>
  );
}
