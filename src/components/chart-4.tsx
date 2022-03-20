import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    //  var chartDom = document.getElementById('main');
var myChart = echarts.init(divRef.current);
var option;

      const data = [];
      for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
      }
      option = {
        xAxis: {
         // max: 'dataMax'
         splitLine: {show: false},
       //  axisLabel: {show: false}
     
      
        },
        grid: {
          x: px(60),
          x2: px(10),
          y: px(30),
          y2: px(40),
 
        },
        yAxis: {
          type: 'category',
          data: ['8:00','9:00','10:00','11:00','12:00','13:00','19:00','17:00','18:00','20:00','21:00','16:00'],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 2 // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            name: '案发时段分析',
            type: 'bar',
            data: data,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true
            }
          }
        ],
        legend: {
          show: true
        },
        animationDuration: 3,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      function run() {
        for (var i = 0; i < data.length; ++i) {
          if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 1000);
          } else {
            data[i] += Math.round(Math.random() * 200);
          }
        }
        myChart.setOption({
          series: [
            {
              type: 'bar',
              data
            }
            
          ]
        });
      }
      setTimeout(function () {
        run();
      }, 0);
      setInterval(function () {
        run();
      }, 1000);
      
      option && myChart.setOption(option); 

  },[])
  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};
