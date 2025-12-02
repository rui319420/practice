import { getDaysInMonth, startOfMonth, getDay, isToday } from "date-fns";
import { DayCell } from "./DayCell/Day"
import styles from "./Month.module.css"

type Props = {
  currentDate: Date;
}

export function Month({ currentDate }: Props) {

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
          >
          </DayCell>
        )
      })}
    </div>
  )
}