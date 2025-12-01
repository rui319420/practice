import { DayCell } from "./MonthGrid/DayCell/Day";
import { Month } from "./MonthGrid/Month";
import { Header } from "./Header/Header";

export default function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Month></Month>
    </div>
  );
}
