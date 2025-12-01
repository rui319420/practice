import { DayCell } from "./DayCell/Day"
import styles from "./Month.module.css"

export function Month() {

  const cells = Array(30).fill(1)

  return (
    <div className={styles.DayBox}>
      {cells.map((_, index) => {
        return (
          <DayCell
            key={index}
            index={index + 1}
          >
          </DayCell>
        )
      })}
    </div>
  )
}