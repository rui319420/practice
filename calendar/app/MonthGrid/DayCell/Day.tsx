import styles from "./Day.module.css"
import { getDay, getDate } from "date-fns"

type Props = {
  index: number
}

export function DayCell({index}: Props) {
  
  const today = new Date()
  const todayStyle = index === getDate(today) ? styles.Today : ""

  return (
    <div className={`${styles.Cell} ${todayStyle}`}>
      {index}
    </div>
  )
}