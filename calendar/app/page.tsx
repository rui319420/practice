'use client';

import { useState } from "react";
import { Month } from "./MonthGrid/Month";
import { Header } from "./Header/Header";
import { addMonths, isSameDay, subMonths, format } from "date-fns";

type Schedule = {
  date: Date;
  content: string
}

export default function Home() {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [inputText, setInputText] = useState("");

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

  const addSchedule = () => {
  
    if (!selectedDate || !inputText) return;

    const newSchedule: Schedule = {
      date: selectedDate,
      content: inputText,
    }

    setSchedules([...schedules, newSchedule])
    setInputText("")
  }

  const filteredSchedules = schedules.filter(schedule =>
    selectedDate && isSameDay(schedule.date, selectedDate)
  );

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
