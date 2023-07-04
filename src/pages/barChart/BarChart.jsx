import React from 'react';
import { userData } from "../../dummyData";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './barChart.css';


const BarChartComponent = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Bar type="monotone" dataKey={dataKey} stroke="#5550bd" fill="#00008B" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf"  strokeDasharray="5 5"/>}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="bar">
      <BarChartComponent
        title="Monthly Revenue"
        data={userData}
        dataKey="Sales"
        grid
      />
    </div>
  );
}
