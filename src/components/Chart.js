import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart', //name od comapny
    },
  },
};

// REQUIRED_PARAMETER_LIST =  ["CompanyName","Company","EBIT","NetSales" ,"CurrentAssets",
//                             "CurrentLiabilities","TotalLiabilities","TotalAsset","MarketValueEquity",
//                            "RetainedEarnings"]

var WEIGHTS ={
   "PRIVATE":{
      "EBIT_TotalAsset_Ratio":3.107,
      "NetSales_TotalAsset_Ratio":0.998,
      "MarketValueEquity_TotalLiablility_Ratio":0.42,
      "WorkingCapital_TotalAsset_Ratio":0.717,
      "RetainedEarning_TotalAsset_Ratio":0.847
   },
"PUBLIC":{
      "EBIT_TotalAsset_Ratio":3.107,
      "NetSales_TotalAsset_Ratio":0.998,
      "MarketValueEquity_TotalLiablility_Ratio":0.42,
      "WorkingCapital_TotalAsset_Ratio":0.717,
      "RetainedEarning_TotalAsset_Ratio":0.847
   }
}
const labels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels2 =
["CompanyName","Company","EBIT","NetSales" ,"CurrentAssets","CurrentLiabilities",
"TotalLiabilities","TotalAsset","MarketValueEquity",
                           "RetainedEarnings"]


const labels =["EBIT_TotalAsset_Ratio","NetSales_TotalAsset_Ratio" ,"MarketValueEquity_TotalLiablility_Ratio",
"WorkingCapital_TotalAsset_Ratio","RetainedEarning_TotalAsset_Ratio"  ]

export const data = {
  labels,
  datasets: [
    {
      label: 'Q1',
      //  data: labels.forEach((e) => WEIGHTS.PRIVATE[e]),
       data: 100,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Q2',
      // data: labels.forEach((e) =>WEIGHTS.PUBLIC[e]),
      data: 100,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Chart({datasets}) {

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "hello chart",
    },
  },
};

const labels =["EBIT_TotalAsset_Ratio","NetSales_TotalAsset_Ratio" ,"MarketValueEquity_TotalLiablility_Ratio",
"WorkingCapital_TotalAsset_Ratio","RetainedEarning_TotalAsset_Ratio"  ]
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//  const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
      
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() =>),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };



 const data = {
  labels,
  datasets: [
    {
      label: 'Q1',
       data: labels.map((e) =>WEIGHTS.PRIVATE[e]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Q2',
      data: labels.map(() =>WEIGHTS.PUBLIC[e]),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return (
  <div>   
     <Bar options={options} data={data} />;
  </div>
  );
}
