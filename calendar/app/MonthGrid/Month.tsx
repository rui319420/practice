import { DayCell } from "./DayCell/Day"
import styles from "./Month.module.css"

export function Month() {

  const cells = [1, 1, 1, 1, 1, 1, 1]

  return (
    <div className={styles.DayBox}>
      {cells.map((_, index) => {
        return (
          <DayCell
            key={index}
          >
          </DayCell>
        )
      })}
    </div>
  )
}