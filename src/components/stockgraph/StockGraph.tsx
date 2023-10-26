//@ts-nocheck
import React from 'react';
import Plot from 'react-plotly.js';
import './style.css'
import Buy from '../buy/Buy';


class StockGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  // componentDidMount() {
  //   this.fetchStock();
  // }

  // fetchStock() {
  //   const pointerToThis = this;
  //   console.log(pointerToThis);
  //   const API_KEY = 'NF6LXRYWSZLD6W5D';
  //   let StockSymbol = 'AAPL';
  //   let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&apikey=${API_KEY}`;
  //   let stockChartXValuesFunction : any = [];
  //   let stockChartYValuesFunction : any = [];

  //   fetch(API_Call)
  //     .then(
  //       function(response) {
  //         return response.json();
  //       }
  //     )
  //     .then(
  //       function(data) {
  //         console.log(data);

  //         for (let key in data['Time Series (Daily)']) {
  //           stockChartXValuesFunction.push(key);
  //           stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
  //         }

  //         console.log(stockChartXValuesFunction);
  //         pointerToThis.setState({
  //           stockChartXValues: stockChartXValuesFunction,
  //           stockChartYValues: stockChartYValuesFunction
  //         });
  //       }
  //     )
  // }

  render() {
    return (
      <div>
        <Plot className='ticker' 
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: '#6237a0'},
            }
          ]}
          layout={
            {
            width: 680, 
            height: 350,
            yaxis: {title:'', showticklabels: false,},
            margin: {
              t: 40,
              l: 0, 
            },
            title:'AAPL'
          }}
        />
      </div>
    )
  }
}

export default StockGraph;