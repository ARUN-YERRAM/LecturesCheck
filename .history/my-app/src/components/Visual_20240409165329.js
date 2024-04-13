// ChartComponent.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponen = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartData) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
          // Chart options
        }
      });
    }
  }, [chartData]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Visual;
