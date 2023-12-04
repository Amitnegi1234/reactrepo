import React from "react";
import chartBar from './chartBar.';
import './chart.css';
const Chart= props =>{
return
    <div className="chart">
        {props.dataPoints.map(dataPoint=> <chartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label}/>)}
    </div>

};

export default Chart;