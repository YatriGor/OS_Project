import React, { useState } from 'react';

function SJF() {
  const [processes, setProcesses] = useState([]);
  const [arrivalTime, setArrivalTime] = useState('');
  const [burstTime, setBurstTime] = useState('');
  const [averageWaitingTime, setAverageWaitingTime] = useState(0);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);

  const addProcess = () => {
    if (arrivalTime.trim() !== '' && burstTime.trim() !== '') {
      const newProcesses = [
        ...processes,
        {
          id: processes.length + 1,
          arrivalTime: parseInt(arrivalTime),
          burstTime: parseInt(burstTime),
          waitingTime: 0,
          turnaroundTime: 0,
          startTime: 0,
          completionTime: 0,
        },
      ];
      setProcesses(newProcesses);
      setArrivalTime('');
      setBurstTime('');
    }
  };

  const calculateWaitingTime = () => {
    const sortedProcesses = [...processes].sort((a, b) => {
      if (a.arrivalTime !== b.arrivalTime) {
        return a.arrivalTime - b.arrivalTime; // Sort by arrival time first
      } else {
        return a.burstTime - b.burstTime;
      }
    });

    let currentTime = 0;
    let totalWaitingTime = 0;
    let totalTurnaroundTime = 0;

    sortedProcesses.forEach((process) => {
      process.startTime = Math.max(currentTime, process.arrivalTime); // Start time is either current time or arrival time
      process.waitingTime = process.startTime - process.arrivalTime;
      if (process.waitingTime < 0) process.waitingTime = 0;
      totalWaitingTime += process.waitingTime;
      currentTime = process.startTime + process.burstTime;
      process.completionTime = currentTime;
      process.turnaroundTime = process.completionTime - process.arrivalTime;
      totalTurnaroundTime += process.turnaroundTime;
    });

    setAverageWaitingTime(totalWaitingTime / processes.length);
    setAverageTurnaroundTime(totalTurnaroundTime / processes.length);
  };

  const generateGanttChart = () => {
    const ganttData = processes.map((process, index) => ({
      id: index + 1,
      name: `Process ${process.id}`,
      startTime: process.startTime,
      endTime: process.startTime + process.burstTime,
    }));

    // Sort ganttData by start time
    ganttData.sort((a, b) => a.startTime - b.startTime);

    // Find the maximum end time
    const maxEndTime = ganttData.reduce((max, process) => Math.max(max, process.endTime), 0);

    // Calculate the total width of the chart
    const totalWidth = 600;

    // Calculate the width of each unit of time
    const unitWidth = totalWidth / maxEndTime;

    // Create the Gantt chart
    const chart = document.createElement('div');
    chart.classList.add('flex', 'mt-4');
    ganttData.forEach((process) => {
      const task = document.createElement('div');
      task.classList.add('inline-block', 'bg-blue-500', 'text-white', 'text-center', 'p-2', 'mr-1');
      task.style.width = `${(process.endTime - process.startTime) * unitWidth}px`;
      task.textContent = `P${process.id}`;
      chart.appendChild(task);
    });

    document.body.appendChild(chart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shortest Job First Scheduler</h1>
      <div className="mb-4">
        <label className="mr-2">Arrival Time:</label>
        <input
          type="number"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          className="border border-purple-500 p-2 text-white bg-none"
        />
        <label className="mx-2">Burst Time:</label>
        <input
          type="number"
          value={burstTime}
          onChange={(e) => setBurstTime(e.target.value)}
          className="border border-purple-500 p-2 text-white bg-none"
        />
        <button onClick={addProcess} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
          Add Process
        </button>
      </div>
          <div className="flex flex-col md:flex-row gap-4">
      <button onClick={calculateWaitingTime} className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">
        Calculate Average Waiting Time
      </button>
      <button onClick={generateGanttChart} className="bg-purple-500 text-white px-4 py-2 rounded-md mb-4">
        Generate Gantt Chart
      </button>
    </div>

      <h2 className="text-xl font-bold mb-2">Processes:</h2>
      <table className="w-full mb-4">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">Arrival Time</th>
            <th className="border border-gray-400 px-4 py-2">Burst Time</th>
            <th className="border border-gray-400 px-4 py-2">Waiting Time</th>
            <th className="border border-gray-400 px-4 py-2">Turnaround Time</th>
            <th className="border border-gray-400 px-4 py-2">Start Time</th>
            <th className="border border-gray-400 px-4 py-2">Completion Time</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process) => (
            <tr key={process.id}>
              <td className="border border-gray-400 px-4 py-2">{process.id}</td>
              <td className="border border-gray-400 px-4 py-2">{process.arrivalTime}</td>
              <td className="border border-gray-400 px-4 py-2">{process.burstTime}</td>
              <td className="border border-gray-400 px-4 py-2">{process.waitingTime}</td>
              <td className="border border-gray-400 px-4 py-2">{process.turnaroundTime}</td>
              <td className="border border-gray-400 px-4 py-2">{process.startTime}</td>
              <td className="border border-gray-400 px-4 py-2">{process.completionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-4">Average Waiting Time: {averageWaitingTime}</h2>
      <h2 className="text-xl font-bold mt-4">Average Turnaround Time: {averageTurnaroundTime}</h2>
    </div>
  );
}

export default SJF;