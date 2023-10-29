//@ts-nocheck
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import './style.css';

function StockGraph({stockChartXValues, stockChartYValues, 
  timeOption}) {

  return (
    <div>
      <Plot className="ticker"
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines',
            marker: { color: '#6237a0' },
          },
        ]}
        layout={{
          width: 680,
          height: 350,
          yaxis: { title: '', showticklabels: false },
          margin: {
            t: 40,
            l: 0,
          },
          title: 'AAPL',
          xaxis: {
            range:timeOption,
            type:'date'
          },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default StockGraph;
