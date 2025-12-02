import styles from "./Day.module.css"
import { getDay, isToday, isSameDay } from "date-fns"

type Props = {
  index: number
  currentDate: Date
  selectedDate: Date | null
  onDateClick: (date: Date) => void
}

export function DayCell({index, currentDate, selectedDate, onDateClick}: Props) {
  
  const thisDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), index);

  const dayOfWeek = getDay(thisDate);
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;

  const isTodayDate = isToday(thisDate);

  const isSelected = selectedDate ? isSameDay(thisDate, selectedDate) : false;

  const todayStyle = isTodayDate ? styles.Today : ""
  const sundayStyle = isSunday ? styles.Sunday : ""
  const saturdayStyle = isSaturday ? styles.Saturday : ""
  const selectedStyle = isSelected ? styles.Selected : "";


  return (
    <div
      onClick={() => onDateClick(thisDate)}
      className={`${styles.Cell} ${todayStyle} ${sundayStyle} ${saturdayStyle} ${selectedStyle}`}
    >
      {index}
    </div>
  )
}