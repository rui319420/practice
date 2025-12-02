import { getDaysInMonth, startOfMonth, getDay } from "date-fns";
import { DayCell } from "./DayCell/Day"
import styles from "./Month.module.css"

type Props = {
  currentDate: Date;
  selectedDate: Date | null;
  onDateClick: (date: Date) => void;
}

export function Month({ currentDate, selectedDate, onDateClick }: Props) {

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = startOfMonth(currentDate);
  const startingDayIndex = getDay(firstDayOfMonth);

  const emptySlots = Array(startingDayIndex).fill(null);
  const cells = [...Array(daysInMonth)].map((_, i) => i + 1);

  return (
    <div className={styles.DayBox}>
      {emptySlots.map((_, index) => (
        <div key={`empty-${index}`} />
      ))}
      {cells.map((day, index) => {
        return (
          <DayCell
            key={index}
            index={day}
            currentDate={currentDate}
            selectedDate={selectedDate}
            onDateClick={onDateClick}
          />
        )
      })}
    </div>
  )
}