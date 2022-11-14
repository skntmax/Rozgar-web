import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { chartMonthAction, profilePreview } from '../../action/profilePreviewAction';
import { getStorage } from '../../utils';
import constant from '../../constant';
import moment from 'moment';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      //   text: 'Chart.js Line Chart - Multi Axis',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    // y1: {
    //   type: 'linear',
    //   display: true,
    //   position: 'right',
    //   grid: {
    //     drawOnChartArea: false,
    //   },
    // },
  },
};


// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Actions',
//       data: [],
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.4)',
//       yAxisID: 'y',
//     }
//   ],
// };

export const month = ['Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022']

export function LineCharts(props) {
  const labels = month.map((i) => {
    console.log("moment", moment(i).format('MM'));
    if (moment(i).format('MM') <= moment().format('MM')) {
      return i
    }
    else return null
  })
  console.log("month", labels)
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      axis: 'y',
      label: 'Actions',
      data: [],
      fill: false,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
      borderWidth: 1
    }]
  });

  useEffect(() => {
    const { CANDIDATE_ID } = getStorage(constant.keys.cd);
    chartMonthAction(CANDIDATE_ID).then((res) => {
      setData({
        ...data,
        datasets: [{
          ...data.datasets, data: res.result.data, label: 'Actions',
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)'
        }]
      })
    }).catch((err) => {
      alert(err)
    })
  }, [])
  return (
    <Bar data={data} />
  )
}
