import styles from "./Day.module.css"
import { getDay, isToday } from "date-fns"

type Props = {
  index: number
  currentDate: Date
}

export function DayCell({index, currentDate}: Props) {
  
  const thisDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), index);

  const dayOfWeek = getDay(thisDate);
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;

  const isTodayDate = isToday(thisDate);

  const todayStyle = isTodayDate ? styles.Today : ""
  const sundayStyle = isSunday ? styles.Sunday : ""
  const saturdayStyle = isSaturday ? styles.Saturday : ""


  return (
    <div className={`${styles.Cell} ${todayStyle} ${sundayStyle} ${saturdayStyle}`}>
      {index}
    </div>
  )
}