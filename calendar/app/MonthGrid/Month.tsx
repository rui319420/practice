import { getDaysInMonth, startOfMonth, getDay } from "date-fns";
import { DayCell } from "./DayCell/Day"
import styles from "./Month.module.css"

export function Month() {

  const today = new Date();
  // 今日の日付を取得

  const daysInMonth = getDaysInMonth(today); // 今月は何日あるか

  const firstDayOfMonth = startOfMonth(today); // 今月の一日は何曜日か
  const startingDayIndex = getDay(firstDayOfMonth);

  const emptySlots = Array(startingDayIndex).fill(null);
  
  const cells = [...Array(daysInMonth)].map((_, i) => i + 1);
  // ひと月あたりの日にちを配列にする

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
          >
          </DayCell>
        )
      })}
    </div>
  )
}