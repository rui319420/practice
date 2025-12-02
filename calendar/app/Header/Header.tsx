import styles from "./Header.module.css"
import { format } from "date-fns"
import { WeekHeader } from "./WeekHeader/WeekHeader"

type Props = {
  currentDate: Date;
  onPrev: () => void;
  onNext: () => void;
}

export function Header({ currentDate, onPrev, onNext }: Props) {

  return (
  <div>
    <div className={styles.Header}>
      <button onClick={onPrev} className={styles.button}>&lt; 前月</button>
      <div>{format(currentDate, "yyyy年MM月")}</div>
      <button onClick={onNext} className={styles.button}>次月 &gt;</button>
    </div>
    <WeekHeader></WeekHeader>
  </div>
  )
}