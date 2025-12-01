import styles from "./Day.module.css"
import { getDay } from "date-fns"

type Props = {
  index: number
}



export function DayCell({index}: Props) {
  
  let DayOfWeek = ''

  const today = new Date()
  if (getDay(today) === 1) {
    DayOfWeek = styles.Sunday
    console.log('Monday')
  }

  return (
    <div className={styles.Cell}>
      {index}
      <div className={DayOfWeek}>
      </div>
    </div>
  )
}