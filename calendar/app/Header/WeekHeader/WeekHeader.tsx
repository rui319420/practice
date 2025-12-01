import styles from "./WeekHeader.module.css"

export function WeekHeader() {

  const days = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className={styles.WeekHeader}>
      {days.map((day, index) => {
        const sundayStyle = day === "日" ? styles.Sunday : ""
        const saturdayStyle = day === "土" ? styles.Saturday : ""
          return (
          <div key={index} className={`${styles.Day} ${sundayStyle} ${saturdayStyle}`}>
          {day}
          </div>
          )
      })}
    </div>
  )
}