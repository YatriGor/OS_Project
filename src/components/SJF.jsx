// import React, { useState } from 'react';
// import Button from './Button';

// function SJF() {
//   const [processes, setProcesses] = useState([]);
//   const [arrivalTime, setArrivalTime] = useState('');
//   const [burstTime, setBurstTime] = useState('');
//   const [averageWaitingTime, setAverageWaitingTime] = useState(0);
//   const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);

//   const addProcess = () => {
//     if (arrivalTime.trim() !== '' && burstTime.trim() !== '') {
//       const newProcesses = [
//         ...processes,
//         {
//           id: processes.length + 1,
//           arrivalTime: parseInt(arrivalTime),
//           burstTime: parseInt(burstTime),
//           waitingTime: 0,
//           turnaroundTime: 0,
//           startTime: 0,
//           completionTime: 0,
//         },
//       ];
//       setProcesses(newProcesses);
//       setArrivalTime('');
//       setBurstTime('');
//     }
//   };

//   const calculateWaitingTime = () => {
//     const sortedProcesses = [...processes].sort((a, b) => {
//       if (a.arrivalTime !== b.arrivalTime) {
//         return a.arrivalTime - b.arrivalTime; // Sort by arrival time first
//       } else {
//         return a.burstTime - b.burstTime;
//       }
//     });

//     let currentTime = 0;
//     let totalWaitingTime = 0;
//     let totalTurnaroundTime = 0;

//     sortedProcesses.forEach((process) => {
//       process.startTime = Math.max(currentTime, process.arrivalTime); // Start time is either current time or arrival time
//       process.waitingTime = process.startTime - process.arrivalTime;
//       if (process.waitingTime < 0) process.waitingTime = 0;
//       totalWaitingTime += process.waitingTime;
//       currentTime = process.startTime + process.burstTime;
//       process.completionTime = currentTime;
//       process.turnaroundTime = process.completionTime - process.arrivalTime;
//       totalTurnaroundTime += process.turnaroundTime;
//     });

//     setAverageWaitingTime(totalWaitingTime / processes.length);
//     setAverageTurnaroundTime(totalTurnaroundTime / processes.length);
//   };

//   const generateGanttChart = () => {
//     const ganttData = processes.map((process, index) => ({
//       id: index + 1,
//       name: `Process ${process.id}`,
//       startTime: process.startTime,
//       endTime: process.startTime + process.burstTime,
//     }));

//     // Sort ganttData by start time
//     ganttData.sort((a, b) => a.startTime - b.startTime);

//     // Find the maximum end time
//     const maxEndTime = ganttData.reduce((max, process) => Math.max(max, process.endTime), 0);

//     // Calculate the total width of the chart
//     const totalWidth = 600;

//     // Calculate the width of each unit of time
//     const unitWidth = totalWidth / maxEndTime;

//     // Create the Gantt chart
//     const chart = document.createElement('div');
//     chart.classList.add('flex');
//     ganttData.forEach((process) => {
//       const task = document.createElement('div');
//       task.classList.add('inline-block', 'bg-slate-600', 'text-white', 'text-center', 'p-2', 'mr-1');
//       task.style.width = `${(process.endTime - process.startTime) * unitWidth}px`;
//       task.textContent = `P${process.id}`;
//       chart.appendChild(task);
//     });
    
//     document.body.appendChild(chart);
//   };
  

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl text-center font-semibold mb-4">SHORTEST JOB FIRST SCHEDULER</h1>
//       <div className="mb-4">
//       <div className="flex flex-col md:flex-row items-center my-10 gap-4 text-center">
//   <label className="mr-2 text-lg">Arrival Time : </label>
//   <input
//     type="number"
//     value={arrivalTime}
//     onChange={(e) => setArrivalTime(e.target.value)}
//     className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
// />
//   <label className="mx-2 text-lg">Burst Time : </label>
//   <input
//     type="number"
//     value={burstTime}
//     onChange={(e) => setBurstTime(e.target.value)}
//     className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
// />
//   <Button onClick={addProcess} className="text-lg">
//     Add Process 
//   </Button>
// </div>

//         <div className="flex flex-col md:flex-row my-10 gap-4">
//           <Button onClick={calculateWaitingTime} className="text-lg">
//             Calculate Average Waiting Time
//           </Button>
//           <Button onClick={generateGanttChart} className="text-lg">
//             Generate Gantt Chart
//           </Button>
//         </div>
//     </div>

//       <table className="w-full my-6">
//         <thead>
//           <tr>
//             <th className="border border-teal-500 px-4 py-2 bg-teal-400 text-slate-900">Process</th>
//             <th className="border border-yellow-400 px-4 py-2 bg-yellow-200 text-slate-900">Arrival Time</th>
//             <th className="border border-purple-600 px-4 py-2 bg-purple-400 text-slate-900">Burst Time</th>
//             <th className="border border-pink-400 px-4 py-2 bg-pink-300 text-slate-900">Waiting Time</th>
//             <th className="border border-blue-500 px-4 py-2 bg-blue-300 text-slate-900">Turnaround Time</th>
//             <th className="border border-indigo-600 px-4 py-2 bg-indigo-400 text-slate-900">Start Time</th>
//             <th className="border border-green-600 px-4 py-2 bg-green-300 text-slate-900">Completion Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {processes.map((process) => (
//             <tr key={process.id}>
//               <td className="border border-teal-500 px-4 py-2">{process.id}</td>
//               <td className="border border-yellow-400 px-4 py-2">{process.arrivalTime}</td>
//               <td className="border border-purple-600 px-4 py-2">{process.burstTime}</td>
//               <td className="border border-pink-400 px-4 py-2">{process.waitingTime}</td>
//               <td className="border border-blue-500 px-4 py-2">{process.turnaroundTime}</td>
//               <td className="border border-indigo-600 px-4 py-2">{process.startTime}</td>
//               <td className="border border-green-600 px-4 py-2">{process.completionTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2 className="text-2xl font-bold my-4">Average Waiting Time : {averageWaitingTime}</h2>
//       <h2 className="text-2xl font-bold mt-4">Average Turnaround Time : {averageTurnaroundTime}</h2>
//     </div>
//   );
// }

// export default SJF;


// import React, { useState } from 'react';
// import Button from './Button';

// function SJF() {
//   const [processes, setProcesses] = useState([]);
//   const [arrivalTime, setArrivalTime] = useState('');
//   const [burstTime, setBurstTime] = useState('');
//   const [averageWaitingTime, setAverageWaitingTime] = useState(0);
//   const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);

//   const addProcess = () => {
//     if (arrivalTime.trim() !== '' && burstTime.trim() !== '') {
//       const newProcesses = [
//         ...processes,
//         {
//           id: processes.length + 1,
//           arrivalTime: parseInt(arrivalTime),
//           burstTime: parseInt(burstTime),
//           waitingTime: 0,
//           turnaroundTime: 0,
//           startTime: 0,
//           completionTime: 0,
//         },
//       ];
//       setProcesses(newProcesses);
//       setArrivalTime('');
//       setBurstTime('');
//     }
//   };

//   const calculateWaitingTime = () => {
//     const sortedProcesses = [...processes].sort((a, b) => a.burstTime - b.burstTime); // Sort by burst time

//     let currentTime = 0;
//     let totalWaitingTime = 0;
//     let totalTurnaroundTime = 0;

//     sortedProcesses.forEach((process) => {
//       // Start time is either current time or arrival time, whichever is greater
//       process.startTime = Math.max(currentTime, process.arrivalTime);

//       // Calculate waiting time
//       process.waitingTime = process.startTime - process.arrivalTime;
//       if (process.waitingTime < 0) process.waitingTime = 0;

//       // Update total waiting time
//       totalWaitingTime += process.waitingTime;

//       // Update current time to the completion time of the current process
//       currentTime = process.startTime + process.burstTime;

//       // Calculate completion time and turnaround time
//       process.completionTime = currentTime;
//       process.turnaroundTime = process.completionTime - process.arrivalTime;

//       // Update total turnaround time
//       totalTurnaroundTime += process.turnaroundTime;
//     });

//     // Calculate average waiting time and average turnaround time
//     setAverageWaitingTime(totalWaitingTime / processes.length);
//     setAverageTurnaroundTime(totalTurnaroundTime / processes.length);
//   };

//   const generateGanttChart = () => {
//       const ganttData = processes.map((process, index) => ({
//               id: index + 1,
//               name: `Process ${process.id}`,
//               startTime: process.startTime,
//               endTime: process.startTime + process.burstTime,
//             }));
        
//             // Sort ganttData by start time
//             ganttData.sort((a, b) => a.startTime - b.startTime);
        
//             // Find the maximum end time
//             const maxEndTime = ganttData.reduce((max, process) => Math.max(max, process.endTime), 0);
        
//             // Calculate the total width of the chart
//             const totalWidth = 600;
        
//             // Calculate the width of each unit of time
//             const unitWidth = totalWidth / maxEndTime;
        
//             // Create the Gantt chart
//             const chart = document.createElement('div');
//             chart.classList.add('flex');
//             ganttData.forEach((process) => {
//               const task = document.createElement('div');
//               task.classList.add('inline-block', 'bg-slate-600', 'text-white', 'text-center', 'p-2', 'mr-1');
//               task.style.width = `${(process.endTime - process.startTime) * unitWidth}px`;
//               task.textContent = `P${process.id}`;
//               chart.appendChild(task);
//             });
            
//             document.body.appendChild(chart);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl text-center font-semibold mb-4">SHORTEST JOB FIRST SCHEDULER</h1>
//       <div className="mb-4">
//         <div className="flex flex-col md:flex-row items-center my-10 gap-4 text-center">
//           <label className="mr-2 text-lg">Arrival Time : </label>
//           <input
//             type="number"
//             value={arrivalTime}
//             onChange={(e) => setArrivalTime(e.target.value)}
//             className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//           />
//           <label className="mx-2 text-lg">Burst Time : </label>
//           <input
//             type="number"
//             value={burstTime}
//             onChange={(e) => setBurstTime(e.target.value)}
//             className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//           />
//           <Button onClick={addProcess} className="text-lg">
//             Add Process
//           </Button>
//         </div>

//         <div className="flex flex-col md:flex-row my-10 gap-4">
//           <Button onClick={calculateWaitingTime} className="text-lg">
//             Calculate Average Waiting Time
//           </Button>
//           <Button onClick={generateGanttChart} className="text-lg">
//             Generate Gantt Chart
//           </Button>
//         </div>
//       </div>

//       <table className="w-full my-6">
//         <thead>
//           <tr>
//             <th className="border border-teal-500 px-4 py-2 bg-teal-400 text-slate-900">Process</th>
//             <th className="border border-yellow-400 px-4 py-2 bg-yellow-200 text-slate-900">Arrival Time</th>
//             <th className="border border-purple-600 px-4 py-2 bg-purple-400 text-slate-900">Burst Time</th>
//             <th className="border border-pink-400 px-4 py-2 bg-pink-300 text-slate-900">Waiting Time</th>
//             <th className="border border-blue-500 px-4 py-2 bg-blue-300 text-slate-900">Turnaround Time</th>
//             <th className="border border-indigo-600 px-4 py-2 bg-indigo-400 text-slate-900">Start Time</th>
//             <th className="border border-green-600 px-4 py-2 bg-green-300 text-slate-900">Completion Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {processes.map((process) => (
//             <tr key={process.id}>
//               <td className="border border-teal-500 px-4 py-2">{process.id}</td>
//               <td className="border border-yellow-400 px-4 py-2">{process.arrivalTime}</td>
//               <td className="border border-purple-600 px-4 py-2">{process.burstTime}</td>
//               <td className="border border-pink-400 px-4 py-2">{process.waitingTime}</td>
//               <td className="border border-blue-500 px-4 py-2">{process.turnaroundTime}</td>
//               <td className="border border-indigo-600 px-4 py-2">{process.startTime}</td>
//               <td className="border border-green-600 px-4 py-2">{process.completionTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2 className="text-2xl font-bold my-4">Average Waiting Time : {averageWaitingTime}</h2>
//       <h2 className="text-2xl font-bold mt-4">Average Turnaround Time : {averageTurnaroundTime}</h2>
//     </div>
//   );
// }

// export default SJF;

import React, { useState } from 'react';
import Button from './Button';

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

  // const calculateWaitingTime = () => {
  //   const sortedProcesses = [...processes].sort((a, b) => a.burstTime - b.burstTime);

  //   let currentTime = 0;
  //   let totalWaitingTime = 0;
  //   let totalTurnaroundTime = 0;

  //   sortedProcesses.forEach((process) => {
  //     // Start time is either current time or arrival time, whichever is greater
  //     process.startTime = Math.max(currentTime, process.arrivalTime);

  //     // Calculate waiting time
  //     process.waitingTime = process.startTime - process.arrivalTime;
  //     if (process.waitingTime < 0) process.waitingTime = 0;

  //     // Update total waiting time
  //     totalWaitingTime += process.waitingTime;

  //     // Update current time to the completion time of the current process
  //     currentTime = process.startTime + process.burstTime;

  //     // Calculate completion time and turnaround time
  //     process.completionTime = currentTime;
  //     process.turnaroundTime = process.completionTime - process.arrivalTime;

  //     // Update total turnaround time
  //     totalTurnaroundTime += process.turnaroundTime;
  //   });

  //   // Calculate average waiting time and average turnaround time
  //   setAverageWaitingTime(totalWaitingTime / processes.length);
  //   setAverageTurnaroundTime(totalTurnaroundTime / processes.length);
  // };


  const calculateWaitingTime = () => {
        const sortedProcesses = [...processes].sort((a, b) => a.burstTime - b.burstTime); // Sort by burst time
    
        let currentTime = 0;
        let totalWaitingTime = 0;
        let totalTurnaroundTime = 0;
    
        sortedProcesses.forEach((process) => {
          // Start time is either current time or arrival time, whichever is greater
          process.startTime = Math.max(currentTime, process.arrivalTime);
    
          // Calculate waiting time
          process.waitingTime = process.startTime - process.arrivalTime;
          if (process.waitingTime < 0) process.waitingTime = 0;
    
          // Update total waiting time
          totalWaitingTime += process.waitingTime;
    
          // Update current time to the completion time of the current process
          currentTime = process.startTime + process.burstTime;
    
          // Calculate completion time and turnaround time
          process.completionTime = currentTime;
          process.turnaroundTime = process.completionTime - process.arrivalTime;
    
          // Update total turnaround time
          totalTurnaroundTime += process.turnaroundTime;
        });
    
        // Calculate average waiting time and average turnaround time
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
                  chart.classList.add('flex');
                  ganttData.forEach((process) => {
                    const task = document.createElement('div');
                    task.classList.add('inline-block', 'bg-slate-600', 'text-white', 'text-center', 'p-2', 'mr-1');
                    task.style.width = `${(process.endTime - process.startTime) * unitWidth}px`;
                    task.textContent = `P${process.id}`;
                    chart.appendChild(task);
                  });
                  
                  document.body.appendChild(chart);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-semibold mb-4">SHORTEST JOB FIRST SCHEDULER</h1>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row items-center my-10 gap-4 text-center">
          <label className="mr-2 text-lg">Arrival Time : </label>
          <input
            type="number"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
          />
          <label className="mx-2 text-lg">Burst Time : </label>
          <input
            type="number"
            value={burstTime}
            onChange={(e) => setBurstTime(e.target.value)}
            className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
          />
          <Button onClick={addProcess} className="text-lg">
            Add Process
          </Button>
        </div>

        <div className="flex flex-col md:flex-row my-10 gap-4">
          <Button onClick={calculateWaitingTime} className="text-lg">
            Calculate Average Waiting Time
          </Button>
          <Button onClick={generateGanttChart} className="text-lg">
            Generate Gantt Chart
          </Button>
        </div>
      </div>

      <table className="w-full my-6">
        <thead>
          <tr>
            <th className="border border-teal-500 px-4 py-2 bg-teal-400 text-slate-900">Process</th>
            <th className="border border-yellow-400 px-4 py-2 bg-yellow-200 text-slate-900">Arrival Time</th>
            <th className="border border-purple-600 px-4 py-2 bg-purple-400 text-slate-900">Burst Time</th>
            <th className="border border-pink-400 px-4 py-2 bg-pink-300 text-slate-900">Waiting Time</th>
            <th className="border border-blue-500 px-4 py-2 bg-blue-300 text-slate-900">Turnaround Time</th>
            <th className="border border-indigo-600 px-4 py-2 bg-indigo-400 text-slate-900">Start Time</th>
            <th className="border border-green-600 px-4 py-2 bg-green-300 text-slate-900">Completion Time</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process) => (
            <tr key={process.id}>
              <td className="border border-teal-500 px-4 py-2">{process.id}</td>
              <td className="border border-yellow-400 px-4 py-2">{process.arrivalTime}</td>
              <td className="border border-purple-600 px-4 py-2">{process.burstTime}</td>
              <td className="border border-pink-400 px-4 py-2">{process.waitingTime}</td>
              <td className="border border-blue-500 px-4 py-2">{process.turnaroundTime}</td>
              <td className="border border-indigo-600 px-4 py-2">{process.startTime}</td>
              <td className="border border-green-600 px-4 py-2">{process.completionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-2xl font-bold my-4">Average Waiting Time : {averageWaitingTime}</h2>
      <h2 className="text-2xl font-bold mt-4">Average Turnaround Time : {averageTurnaroundTime}</h2>
    </div>
  );
}

export default SJF;
