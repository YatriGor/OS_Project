import React, { useState } from 'react';

const FIFOPageReplacement = () => {
  const [pageFaults, setPageFaults] = useState(0);
  const [memory, setMemory] = useState([]);
  const [queue, setQueue] = useState([]);

  const handlePageReference = (page) => {
    if (memory.includes(page)) {
      // Page is already in memory, do nothing
      return;
    }

    if (memory.length < 3) {
      // Memory is not full, add page to memory
      setMemory((prevMemory) => [...prevMemory, page]);
      setPageFaults((prevPageFaults) => prevPageFaults + 1);
    } else {
      // Memory is full, replace the oldest page in the queue
      const newQueue = queue.slice(1);
      newQueue.push(page);
      setQueue(newQueue);
      setMemory((prevMemory) => {
        const newMemory = prevMemory.slice(1);
        newMemory.push(page);
        return newMemory;
      });
      setPageFaults((prevPageFaults) => prevPageFaults + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">FIFO Page Replacement Algorithm</h1>
      <div className="flex flex-wrap gap-4">
        <button onClick={() => handlePageReference(1)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 1</button>
        <button onClick={() => handlePageReference(2)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 2</button>
        <button onClick={() => handlePageReference(3)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 3</button>
        <button onClick={() => handlePageReference(4)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 4</button>
        <button onClick={() => handlePageReference(5)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 5</button>
      </div>
      <h2 className="text-xl font-semibold mt-4">Page Faults: {pageFaults}</h2>
      <h3 className="text-lg mt-2">Memory:
        <div className="flex flex-wrap gap-1 mt-2">
          {memory.map((page, index) => (
            <div key={index} className="bg-teal-400 p-2 rounded">{page}</div>
          ))}
        </div>
      </h3>
      <h3 className="text-lg mt-2">Queue:
        <div className="flex flex-wrap gap-1 mt-2">
          {queue.map((page, index) => (
            <div key={index} className="bg-pink-500 p-2 rounded">{page}</div>
          ))}
        </div>
      </h3>
    </div>
  );
};

export default FIFOPageReplacement;