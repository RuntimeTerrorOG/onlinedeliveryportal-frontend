import Chart from "../../components/chart/Chart";
import "./lineChart.css";
import { userData } from "../../dummyData";


export default function Home() {
  return (
    <div className="Line">
      <Chart data={userData} title="Monthly Revenue" grid dataKey="Sales"/>
      <div className="LineWidgets">
      </div>
    </div>
  );
}