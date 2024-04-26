// // // import React, { useState } from 'react';
// // // import Button from './Button'

// // // const CLookDiskScheduling = () => {
// // //   const [requests, setRequests] = useState('');
// // //   const [initialPosition, setInitialPosition] = useState('');
// // //   const [currentPosition, setCurrentPosition] = useState('');
// // //   const [totalSeekTime, setTotalSeekTime] = useState(0);
// // //   const [sequence, setSequence] = useState([]);
// // //   const totalTracks = 200; // Total number of tracks on the disk

// // //   const calculateSeekTime = (start, end) => {
// // //     return Math.abs(end - start);
// // //   };

// // //   const handleStart = () => {
// // //     const parsedRequests = requests.split(',').map(req => parseInt(req));
// // //     const parsedInitialPosition = parseInt(initialPosition);

// // //     const sortedRequests = [...parsedRequests].sort((a, b) => a - b);
// // //     const idx = sortedRequests.findIndex(req => req >= parsedInitialPosition);

// // //     const scannedRequests = idx === -1 ? sortedRequests : sortedRequests.slice(idx);

// // //     const sequence = [];
// // //     let currentPosition = parsedInitialPosition;
// // //     let seekTime = 0;

// // //     for (let i = 0; i < scannedRequests.length; i++) {
// // //       sequence.push(scannedRequests[i]);
// // //       seekTime += calculateSeekTime(currentPosition, scannedRequests[i]);
// // //       currentPosition = scannedRequests[i];
// // //     }

// // //     if (idx !== -1) {
// // //       currentPosition = sortedRequests[0];
// // //       seekTime += calculateSeekTime(parsedInitialPosition, scannedRequests[0]);
// // //       sequence.push(sortedRequests[0]);
// // //     }

// // //     setCurrentPosition(currentPosition);
// // //     setTotalSeekTime(seekTime);
// // //     setSequence(sequence);
// // //   };

// // //   return (
// // //     <div className="container h-screen mx-auto p-4">
// // //       <h2 className="text-3xl text-center h-20 font-bold mb-4">C-LOOK DISK SCHEDULING ALGORITHM</h2>
// // //       <div className="disk-container">
// // //         <div className="disk">
// // //           <div className="disk-head" style={{left: `${(currentPosition / totalTracks) * 100}%`}}></div>
// // //         </div>
// // //       </div>
// // //       <div className="flex flex-col gap-4">
// // //         <div>
// // //           <label htmlFor="requests" className="font-bold">Requests (comma-separated): </label>
// // //           <input
// // //             id="requests"
// // //             type="text"
// // //             value={requests}
// // //             onChange={(e) => setRequests(e.target.value)}
// // //             className="border border-gray-300 px-2 py-1 rounded"
// // //           />
// // //         </div>
// // //         <div>
// // //           <label htmlFor="initialPosition" className="font-bold">Initial Position: </label>
// // //           <input
// // //             id="initialPosition"
// // //             type="text"
// // //             value={initialPosition}
// // //             onChange={(e) => setInitialPosition(e.target.value)}
// // //             className="border border-gray-300 px-2 py-1 rounded"
// // //           />
// // //         </div>
// // //         <Button onClick={handleStart} className="text-lg text-white px-4 py-2 rounded">Start</Button>
// // //         <p className="font-bold">Current Position: {currentPosition}</p>
// // //         <p className="font-bold">Total Seek Time: {totalSeekTime}</p>
// // //         <p className="font-bold">Sequence: {sequence.join(' -> ')}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CLookDiskScheduling;

// // import React, { useState } from 'react';
// // import Button from './Button';

// // const CLookDiskScheduling = () => {
// //   const [requests, setRequests] = useState('');
// //   const [initialPosition, setInitialPosition] = useState('');
// //   const [currentPosition, setCurrentPosition] = useState('');
// //   const [totalSeekTime, setTotalSeekTime] = useState(0);
// //   const [sequence, setSequence] = useState([]);
// //   const totalTracks = 200; // Total number of tracks on the disk

// //   const calculateSeekTime = (start, end) => {
// //     return Math.abs(end - start);
// //   };

// //   const handleStart = () => {
// //     const parsedRequests = requests.split(',').map(req => parseInt(req));
// //     const parsedInitialPosition = parseInt(initialPosition);

// //     const sortedRequests = [...parsedRequests].sort((a, b) => a - b);
// //     const idx = sortedRequests.findIndex(req => req >= parsedInitialPosition);

// //     const scannedRequests = idx === -1 ? sortedRequests : sortedRequests.slice(idx);

// //     const sequence = [];
// //     let currentPosition = parsedInitialPosition;
// //     let seekTime = 0;

// //     for (let i = 0; i < scannedRequests.length; i++) {
// //       sequence.push(scannedRequests[i]);
// //       seekTime += calculateSeekTime(currentPosition, scannedRequests[i]);
// //       currentPosition = scannedRequests[i];
// //     }

// //     if (idx !== -1) {
// //       currentPosition = sortedRequests[0];
// //       seekTime += calculateSeekTime(parsedInitialPosition, scannedRequests[0]);
// //       sequence.push(sortedRequests[0]);
// //     }

// //     setCurrentPosition(currentPosition);
// //     setTotalSeekTime(seekTime);
// //     setSequence(sequence);
// //   };

// //   return (
// //     <div className="container h-screen mx-auto p-4">
// //       <h2 className="text-3xl text-center h-20 font-bold mb-4">C-LOOK DISK SCHEDULING ALGORITHM</h2>
// //       <div className="disk-container">
// //         <div className="disk">
// //           <div className="disk-head" style={{left: `${(currentPosition / totalTracks) * 100}%`}}></div>
// //         </div>
// //       </div>
// //       <div className="flex flex-col gap-4 border p-16 rounded-lg">
// //         <div className="flex m-10">
// //           <div className="flex-1">
// //             <label htmlFor="requests" className="font-bold">Requests (comma-separated): </label>
// //             <input
// //               id="requests"
// //               type="text"
// //               value={requests}
// //               onChange={(e) => setRequests(e.target.value)}
// //               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
// //             />
// //           </div>
// //           <div className="flex-1">
// //             <label htmlFor="initialPosition" className="font-bold">Initial Position: </label>
// //             <input
// //               id="initialPosition"
// //               type="text"
// //               value={initialPosition}
// //               onChange={(e) => setInitialPosition(e.target.value)}
// //               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
// //             />
// //           </div>
// //         </div>
// //         <div className="inline-block mx-10 mb-10">
// //           <Button onClick={handleStart} className="text-lg text-white px-4 py-2 rounded">Start</Button>
// //         </div>
// //         <p className="font-bold text-lg mx-10">Current Position: {currentPosition}</p>
// //         <p className="font-bold text-lg mx-10">Total Seek Time: {totalSeekTime}</p>
// //         <p className="font-bold text-lg mx-10">Sequence: {sequence.join(' -> ')}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CLookDiskScheduling;


// import React, { useState } from 'react';
// import Button from './Button';

// const CLookDiskScheduling = () => {
//   const [requests, setRequests] = useState('');
//   const [initialPosition, setInitialPosition] = useState('');
//   const [currentPosition, setCurrentPosition] = useState('');
//   const [totalSeekTime, setTotalSeekTime] = useState(0);
//   const [sequence, setSequence] = useState([]);
//   const totalTracks = 200; // Total number of tracks on the disk

//   const calculateSeekTime = (start, end) => {
//     return Math.abs(end - start);
//   };

//   const handleStart = () => {
//     const parsedRequests = requests.split(',').map(req => parseInt(req));
//     const parsedInitialPosition = parseInt(initialPosition);

//     const sortedRequests = [...parsedRequests].sort((a, b) => a - b);
//     const idx = sortedRequests.findIndex(req => req >= parsedInitialPosition);

//     const scannedRequests = idx === -1 ? sortedRequests : sortedRequests.slice(idx);

//     const sequence = [];
//     let currentPosition = parsedInitialPosition;
//     let seekTime = 0;

//     for (let i = 0; i < scannedRequests.length; i++) {
//       sequence.push(scannedRequests[i]);
//       seekTime += calculateSeekTime(currentPosition, scannedRequests[i]);
//       currentPosition = scannedRequests[i];
//     }

//     if (idx !== -1) {
//       currentPosition = sortedRequests[0];
//       seekTime += calculateSeekTime(parsedInitialPosition, scannedRequests[0]);
//       sequence.push(sortedRequests[0]);
//     }

//     setCurrentPosition(currentPosition);
//     setTotalSeekTime(seekTime);
//     setSequence(sequence);
//   };

//   return (
//     <div className="container h-screen mx-auto p-4">
//       <h2 className="text-3xl text-center h-20 font-bold mb-4">C-LOOK DISK SCHEDULING ALGORITHM</h2>
//       <div className="disk-container">
//         <div className="disk">
//           <div className="disk-head" style={{left: `${(currentPosition / totalTracks) * 100}%`}}></div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 border mx-10 p-16 rounded-lg">
//         <div className="flex items-center">
//           <div className="flex-1">
//             <label htmlFor="requests" className="font-bold ml-10 mr-4 text-lg text-purple-400 ">Requests : </label>
//             <input
//               id="requests"
//               type="text"
//               value={requests}
//               onChange={(e) => setRequests(e.target.value)}
//               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="initialPosition" className="font-bold mr-4 text-lg text-purple-400">Initial Position : </label>
//             <input
//               id="initialPosition"
//               type="text"
//               value={initialPosition}
//               onChange={(e) => setInitialPosition(e.target.value)}
//               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//             />
//           </div>
//           <Button onClick={handleStart} className="text-lg text-white px-4 py-2 rounded mr-24">Start</Button>
//         </div>
//         <p className="font-bold text-lg mx-10">Current Position: {currentPosition}</p>
//         <p className="font-bold text-lg mx-10">Total Seek Time: {totalSeekTime}</p>
//         <p className="font-bold text-lg mx-10">Sequence: {sequence.join(' -> ')}</p>
//       </div>
//     </div>
//   );
// };

// export default CLookDiskScheduling;


// import React, { useState } from 'react';
// import Button from './Button';

// const CLookDiskScheduling = () => {
//   const [requests, setRequests] = useState('');
//   const [initialPosition, setInitialPosition] = useState('');
//   const [currentPosition, setCurrentPosition] = useState('');
//   const [totalSeekTime, setTotalSeekTime] = useState(0);
//   const [sequence, setSequence] = useState([]);
//   const totalTracks = 200; // Total number of tracks on the disk

//   const calculateSeekTime = (start, end) => {
//     return Math.abs(end - start);
//   };

//   const handleStart = () => {
//     const parsedRequests = requests.split(',').map(req => parseInt(req));
//     const parsedInitialPosition = parseInt(initialPosition);

//     const left = [];
//     const right = [];

//     parsedRequests.forEach(req => {
//       if (req < parsedInitialPosition) left.push(req);
//       else if (req > parsedInitialPosition) right.push(req);
//     });

//     const sortedRequests = [...right.sort((a, b) => a - b), ...left.sort((a, b) => a - b)];
//     const sequence = [...right, ...left.reverse()];

//     let seekTime = 0;
//     let currentPosition = parsedInitialPosition;

//     sortedRequests.forEach(req => {
//       seekTime += calculateSeekTime(currentPosition, req);
//       currentPosition = req;
//     });

//     setCurrentPosition(currentPosition);
//     setTotalSeekTime(seekTime);
//     setSequence(sequence);
//   };

//   return (
//     <div className="container h-screen mx-auto p-4">
//       <h2 className="text-3xl text-center h-20 font-bold mb-4">C-LOOK DISK SCHEDULING ALGORITHM</h2>
//       <div className="disk-container">
//         <div className="disk">
//           <div className="disk-head" style={{ left: `${(currentPosition / totalTracks) * 100}%` }}></div>
//         </div>
//       </div>
//       <div className="flex flex-col gap-4 border mx-10 p-16 rounded-lg">
//         <div className="flex items-center">
//           <div className="flex-1">
//             <label htmlFor="requests" className="font-bold ml-10 mr-4 text-lg text-purple-400 ">Requests : </label>
//             <input
//               id="requests"
//               type="text"
//               value={requests}
//               onChange={(e) => setRequests(e.target.value)}
//               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//             />
//           </div>
//           <div className="flex-1">
//             <label htmlFor="initialPosition" className="font-bold mr-4 text-lg text-purple-400">Initial Position : </label>
//             <input
//               id="initialPosition"
//               type="text"
//               value={initialPosition}
//               onChange={(e) => setInitialPosition(e.target.value)}
//               className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
//             />
//           </div>
//           <Button onClick={handleStart} className="text-lg text-white px-4 py-2 rounded mr-24">Start</Button>
//         </div>
//         <p className="font-bold text-lg mx-10">Current Position: {currentPosition}</p>
//         <p className="font-bold text-lg mx-10">Total Seek Time: {totalSeekTime}</p>
//         <p className="font-bold text-lg mx-10">Sequence: {sequence.join(' -> ')}</p>
//       </div>
//     </div>
//   );
// };

// export default CLookDiskScheduling;


import React, { useState } from 'react';
import Button from './Button';

const CLookDiskScheduling = () => {
  const [requests, setRequests] = useState('');
  const [initialPosition, setInitialPosition] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [totalSeekTime, setTotalSeekTime] = useState(0);
  const [sequence, setSequence] = useState([]);
  const totalTracks = 200; // Total number of tracks on the disk

  const calculateSeekTime = (start, end) => {
    return Math.abs(end - start);
  };

  const handleStart = () => {
    const parsedRequests = requests.split(',').map(req => parseInt(req));
    const parsedInitialPosition = parseInt(initialPosition);

    const sortedRequests = [...parsedRequests].sort((a, b) => a - b);
    const idx = sortedRequests.findIndex(req => req >= parsedInitialPosition);

    const sequence = [];
    let currentPosition = parsedInitialPosition;
    let seekTime = 0;

    // If there are no requests or the initial position is out of range, return
    if (sortedRequests.length === 0 || idx === -1) {
      setCurrentPosition(currentPosition);
      setTotalSeekTime(seekTime);
      setSequence(sequence);
      return;
    }

    // Handle requests on the right side of the initial position
    for (let i = idx; i < sortedRequests.length; i++) {
      sequence.push(sortedRequests[i]);
      seekTime += calculateSeekTime(currentPosition, sortedRequests[i]);
      currentPosition = sortedRequests[i];
    }

    // Handle requests on the left side of the initial position (wrap-around)
    if (idx > 0) {
      // Move to the first request on the rightmost side
      seekTime += calculateSeekTime(currentPosition, totalTracks - 1);
      currentPosition = sortedRequests[0];

      // Process requests from the beginning up to the initial position
      for (let i = 0; i < idx; i++) {
        sequence.push(sortedRequests[i]);
        seekTime += calculateSeekTime(currentPosition, sortedRequests[i]);
        currentPosition = sortedRequests[i];
      }
    }

    setCurrentPosition(currentPosition);
    setTotalSeekTime(seekTime);
    setSequence(sequence);
  };

  return (
    <div className="container h-screen mx-auto p-4">
      <h2 className="text-3xl text-center h-20 font-bold mb-4">C-LOOK DISK SCHEDULING ALGORITHM</h2>
      <div className="disk-container">
        <div className="disk">
        <div className="disk-head" style={{left: `${(currentPosition / totalTracks) * 100}%`}}></div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border mx-10 p-16 rounded-lg">
        <div className="flex items-center">
          <div className="flex-1">
            <label htmlFor="requests" className="font-bold ml-10 mr-4 text-lg text-purple-400 ">Requests : </label>
            <input
              id="requests"
              type="text"
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
              className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="initialPosition" className="font-bold mr-4 text-lg text-purple-400">Initial Position : </label>
            <input
              id="initialPosition"
              type="text"
              value={initialPosition}
              onChange={(e) => setInitialPosition(e.target.value)}
              className="border border-purple-500 rounded-md px-4 py-2 text-white bg-transparent focus:outline-none focus:border-purple-700"
            />
          </div>
          <Button onClick={handleStart} className="text-lg text-white px-4 py-2 rounded mr-24">Start</Button>
        </div>
        <p className="font-bold text-lg mx-10">Current Position: {currentPosition}</p>
        <p className="font-bold text-lg mx-10">Total Seek Time: {totalSeekTime}</p>
        <p className="font-bold text-lg mx-10">Sequence: {sequence.join(' -> ')}</p>
      </div>
    </div>
  );
};

export default CLookDiskScheduling;