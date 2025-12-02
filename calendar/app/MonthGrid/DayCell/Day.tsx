import styles from "./Day.module.css"
import { getDay, getDate } from "date-fns"

type Props = {
  index: number
}

export function DayCell({index}: Props) {
  
  const today = new Date()
  const todayStyle = index === getDate(today) ? styles.Today : ""

  const currentTargetDate = new Date(today.getFullYear(), today.getMonth(), index);

  const dayOfWeek = getDay(currentTargetDate);
  const isSunday = dayOfWeek === 0;
  const isSaturday = dayOfWeek === 6;

  const sundayStyle = isSunday ? styles.Sunday : ""
  const saturdayStyle = isSaturday ? styles.Saturday : ""


  return (
    <div className={`${styles.Cell} ${todayStyle} ${sundayStyle} ${saturdayStyle}`}>
      {index}
    </div>
  )
}