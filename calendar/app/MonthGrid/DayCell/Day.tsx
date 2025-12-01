import styles from "./Day.module.css"

type Props = {
  index: number
}

export function DayCell({index}: Props) {
  
  return (
    <div className={styles.Cell}>
      {index}
    </div>
  )
}