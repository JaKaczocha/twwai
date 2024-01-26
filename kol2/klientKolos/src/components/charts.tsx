import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  date: string;
  pressure: string;
  temperature: string;
  humidity: string;
}

interface FormattedChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}


function generateChartData(data: ChartData[]) {
  const parseDate = (dateString: string): Date => {
    const [dayMonth, time] = dateString.split(' ');
    const [day, month] = dayMonth.split(':');
    const [hours, minutes, seconds] = time.split(':');
    return new Date(2022, Number(month) - 1, Number(day), Number(hours), Number(minutes), Number(seconds));
  };

  const sortedData = data.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  const labels = sortedData.map((entry) => entry.date);
  const pressureData = data.map((entry) => parseFloat(entry.pressure));
  const temperatureData = data.map((entry) => parseFloat(entry.temperature));
  const humidityData = data.map((entry) => parseFloat(entry.humidity));

  return {
    labels,
    datasets: [
      {
        label: 'Pressure',
        data: pressureData,
        borderColor: 'rgb(217,71,20)',
        backgroundColor: 'rgb(199,33,33)',
      },
      {
        label: 'Temperature',
        data: temperatureData,
        borderColor: 'rgb(100,91,227)',
        backgroundColor: 'rgb(60,20,200)',
      },
      {
        label: 'Humidity',
        data: humidityData,
        borderColor: 'rgb(71, 172, 122)',
        backgroundColor: 'rgba(75, 122, 15, 0.5)',
      },
    ],
  };
}

function Charts() {
  const [chartData, setChartData] = useState<FormattedChartData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch('http://localhost:3100/data');
        const result: ChartData[] = await response.json();

        const formattedChartData = generateChartData(result);
        
        setChartData(formattedChartData);
        setLoading(false);
      } catch (error) {
        console.error('Błąd przy pobieraniu danych: ', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: 10 }}>
      {chartData && !loading ? (
        <Line
          height={400}
          width={800}
          
          data={chartData}
        />
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}

export default Charts;
