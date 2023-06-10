import "./chart2.css"

import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  export default function chart2({ title, data, dataKey, grid }) {
  
    return (
      <div className="chart2">
        <h3 className="chartTitle2">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Bar type="monotone" dataKey={dataKey} stroke="#8884d8" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }