import styles from "./Header.module.css"
import { format } from "date-fns"
import { WeekHeader } from "./WeekHeader/WeekHeader"

export function Header() {

  return (
  <div>
    <div className={styles.Header}>
      <div>{format(new Date(), "yyyy年MM月")}</div>
    </div>
    <WeekHeader></WeekHeader>
  </div>
  )
}