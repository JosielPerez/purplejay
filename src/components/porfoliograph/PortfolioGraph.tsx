//@ts-nocheck
import React from 'react';
import Plot from 'react-plotly.js';
import './style.css';

function PortfolioGraph({timeOption, stockChartXValues, stockChartYValues }) {

  return (
    <div>
      <Plot className="portfolio_ticker"
        data={[
          {
            x: stockChartXValues ,
            y: stockChartXValues ,
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
          title: {
            text: 'Balance',
            x: 0.04,
            font:{
              size: 26,
              color: '#6237a0'
            },
            y:0.975,
            
          },
          xaxis: {
            range:timeOption,
            type:'date',
            color: '#6237a0'
          },
        }}
        config={{ displayModeBar: false }}
      />
    </div>
  );
}

export default PortfolioGraph;
