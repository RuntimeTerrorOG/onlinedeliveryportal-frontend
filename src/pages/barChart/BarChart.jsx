import chart2 from "../../components/chart2/Chart2";
import "./barChart.css";
import { data } from "../../dummyData";


export default function chart2() {
  return (
    <div className="Bar">
      <Chart data={data} title="visitor statics" grid dataKey="visitors"/>
      <div className="BarWidgets">
      </div>
    </div>
  );
}