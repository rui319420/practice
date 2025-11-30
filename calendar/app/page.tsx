import { DayCell } from "./MonthGrid/DayCell/Day";
import { Month } from "./MonthGrid/Month";

export default function Home() {
  return (
    <div className="container">
      <DayCell></DayCell>
      <Month></Month>
    </div>
  );
}
