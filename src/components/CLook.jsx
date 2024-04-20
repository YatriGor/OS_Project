import React, { useState } from 'react';

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

    const scannedRequests = idx === -1 ? sortedRequests : sortedRequests.slice(idx);

    const sequence = [];
    let currentPosition = parsedInitialPosition;
    let seekTime = 0;

    for (let i = 0; i < scannedRequests.length; i++) {
      sequence.push(scannedRequests[i]);
      seekTime += calculateSeekTime(currentPosition, scannedRequests[i]);
      currentPosition = scannedRequests[i];
    }

    if (idx !== -1) {
      currentPosition = sortedRequests[0];
      seekTime += calculateSeekTime(parsedInitialPosition, scannedRequests[0]);
      sequence.push(sortedRequests[0]);
    }

    setCurrentPosition(currentPosition);
    setTotalSeekTime(seekTime);
    setSequence(sequence);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">C-Look Disk Scheduling Algorithm</h2>
      <div className="disk-container">
        <div className="disk">
          <div className="disk-head" style={{left: `${(currentPosition / totalTracks) * 100}%`}}></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="requests" className="font-bold">Requests (comma-separated): </label>
          <input
            id="requests"
            type="text"
            value={requests}
            onChange={(e) => setRequests(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </div>
        <div>
          <label htmlFor="initialPosition" className="font-bold">Initial Position: </label>
          <input
            id="initialPosition"
            type="text"
            value={initialPosition}
            onChange={(e) => setInitialPosition(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </div>
        <button onClick={handleStart} className="bg-blue-500 text-white px-4 py-2 rounded">Start</button>
        <p className="font-bold">Current Position: {currentPosition}</p>
        <p className="font-bold">Total Seek Time: {totalSeekTime}</p>
        <p className="font-bold">Sequence: {sequence.join(' -> ')}</p>
      </div>
    </div>
  );
};

export default CLookDiskScheduling;
