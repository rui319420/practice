import styles from "./Header.module.css"
import { WeekHeader } from "./WeekHeader/WeekHeader"

export function Header() {

  return (
  <div>
    <div className={styles.Header}>
      2025年12月
    </div>
    <WeekHeader></WeekHeader>
  </div>
  )
}