// // import React, { useState } from 'react';

// // const FIFOPageReplacement = () => {
// //   const [pageFaults, setPageFaults] = useState(0);
// //   const [memory, setMemory] = useState([]);
// //   const [queue, setQueue] = useState([]);

// //   const handlePageReference = (page) => {
// //     if (memory.includes(page)) {
// //       // Page is already in memory, do nothing
// //       return;
// //     }

// //     if (memory.length < 3) {
// //       // Memory is not full, add page to memory
// //       setMemory((prevMemory) => [...prevMemory, page]);
// //       setPageFaults((prevPageFaults) => prevPageFaults + 1);
// //     } else {
// //       // Memory is full, replace the oldest page in the queue
// //       const newQueue = queue.slice(1);
// //       newQueue.push(page);
// //       setQueue(newQueue);
// //       setMemory((prevMemory) => {
// //         const newMemory = prevMemory.slice(1);
// //         newMemory.push(page);
// //         return newMemory;
// //       });
// //       setPageFaults((prevPageFaults) => prevPageFaults + 1);
// //     }
// //   };

// //   return (
// //     <div className="container h-screen mx-auto p-4">
// //       <h1 className="text-3xl text-center font-bold h-24 mb-10">FIFO PAGE REPLACEMENT ALGORITHM</h1>
// //       <div className="flex flex-wrap gap-4">
// //         <button onClick={() => handlePageReference(1)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 1</button>
// //         <button onClick={() => handlePageReference(2)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 2</button>
// //         <button onClick={() => handlePageReference(3)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 3</button>
// //         <button onClick={() => handlePageReference(4)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 4</button>
// //         <button onClick={() => handlePageReference(5)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 5</button>
// //         <button onClick={() => handlePageReference(6)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 6</button>
// //         <button onClick={() => handlePageReference(7)} className="bg-blue-500 text-white px-4 py-2 rounded">Page 7</button>
// //       </div>
// //       <h2 className="text-xl font-semibold mt-4">Page Faults: {pageFaults}</h2>
// //       <h3 className="text-lg mt-2">Memory:
// //         <div className="flex flex-wrap gap-1 mt-2">
// //           {memory.map((page, index) => (
// //             <div key={index} className="bg-teal-400 p-2 rounded">{page}</div>
// //           ))}
// //         </div>
// //       </h3>
// //       <h3 className="text-lg mt-2">Queue:
// //         <div className="flex flex-wrap gap-1 mt-2">
// //           {queue.map((page, index) => (
// //             <div key={index} className="bg-pink-500 p-2 rounded">{page}</div>
// //           ))}
// //         </div>
// //       </h3>
// //     </div>
// //   );
// // };

// // export default FIFOPageReplacement;


// import React, { useState } from 'react';

// const FIFOPageReplacement = () => {
//   const [pageFaults, setPageFaults] = useState(0);
//   const [pageHits, setPageHits] = useState(0);
//   const [memory, setMemory] = useState([]);
//   const [queue, setQueue] = useState([]);

//   const handlePageReference = (page) => {
//     if (memory.includes(page)) {
//       // Page hit
//       setPageHits((prevPageHits) => prevPageHits + 1);
//       return;
//     }

//     setPageFaults((prevPageFaults) => prevPageFaults + 1);

//     if (memory.length < 3) {
//       // Memory is not full, add page to memory
//       setMemory((prevMemory) => [...prevMemory, page]);
//     } else {
//       // Memory is full, replace the oldest page in the queue
//       const newQueue = queue.slice(1);
//       newQueue.push(page);
//       setQueue(newQueue);
//       setMemory((prevMemory) => {
//         const newMemory = prevMemory.slice(1);
//         newMemory.push(page);
//         return newMemory;
//       });
//     }
//   };

//   return (
//     <div className="container h-screen mx-auto p-4">
//       <h1 className="text-3xl text-center font-bold h-24 mb-10">FIFO PAGE REPLACEMENT ALGORITHM</h1>
//       <div className="border border-white m-16 p-10 rounded-lg">
//       <div className="flex flex-wrap gap-4 items-center justify-center">
//         <button onClick={() => handlePageReference(1)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">Page 1</button>
//         <button onClick={() => handlePageReference(2)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">Page 2</button>
//         <button onClick={() => handlePageReference(3)} className="bg-indigo-400 border-4 border-indigo-600  text-white px-4 py-2 rounded">Page 3</button>
//         <button onClick={() => handlePageReference(4)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">Page 4</button>
//         <button onClick={() => handlePageReference(5)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">Page 5</button>
//         <button onClick={() => handlePageReference(6)} className="bg-indigo-400 border-4 border-indigo-600  text-white px-4 py-2 rounded">Page 6</button>
//         <button onClick={() => handlePageReference(7)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">Page 7</button>
//       </div>
//       <div className="mx-20 my-10">
//       <h2 className="text-xl font-semibold mt-4">Page Faults: {pageFaults}</h2>
//       <h2 className="text-xl font-semibold mt-4">Page Hits: {pageHits}</h2>
//       <h3 className="text-lg mt-2">Memory:
//         <div className="flex flex-wrap gap-1 mt-2">
//           {memory.map((page, index) => (
//             <div key={index} className="bg-teal-400 p-2 rounded">{page}</div>
//           ))}
//         </div>
//       </h3>
//       <h3 className="text-lg mt-2">Queue:
//         <div className="flex flex-wrap gap-1 mt-2">
//           {queue.map((page, index) => (
//             <div key={index} className="bg-pink-500 p-2 rounded">{page}</div>
//           ))}
//         </div>
//       </h3>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default FIFOPageReplacement;


import React, { useState } from 'react';

const FIFOPageReplacement = () => {
  const [pageFaults, setPageFaults] = useState(0);
  const [pageHits, setPageHits] = useState(0);
  const [memory, setMemory] = useState([]);
  const [queue, setQueue] = useState([]);

  const handlePageReference = (page) => {
    // Add the clicked page to the queue
    setQueue((prevQueue) => [...prevQueue, page]);

    if (memory.includes(page)) {
      // Page hit
      setPageHits((prevPageHits) => prevPageHits + 1);
    } else {
      setPageFaults((prevPageFaults) => prevPageFaults + 1);
      // Page fault, add page to memory if there is space
      if (memory.length < 3) {
        setMemory((prevMemory) => [...prevMemory, page]);
      } else {
        // Replace the oldest page in memory with the new page
        setMemory((prevMemory) => [...prevMemory.slice(1), page]);
      }
    }
  };

  return (
    <div className="container h-screen mx-auto p-4">
      <h1 className="text-3xl text-center font-bold h-22 mb-10">FIFO PAGE REPLACEMENT ALGORITHM</h1>
      <div className="border border-white m-16 p-10 rounded-lg">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {[1, 2, 3, 4, 5, 6, 7].map((pageNumber) => (
            <button key={pageNumber} onClick={() => handlePageReference(pageNumber)} className="bg-indigo-400  border-4 border-indigo-600 text-white px-4 py-2 rounded">{`Page ${pageNumber}`}</button>
          ))}
        </div>
        <div className="mx-20 my-10">
          <h2 className="text-xl font-semibold mt-4">Page Faults: {pageFaults}</h2>
          <h2 className="text-xl font-semibold mt-4">Page Hits: {pageHits}</h2>
          <h3 className="text-lg mt-2">Memory:
            <div className="flex flex-wrap gap-1 mt-2">
              {memory.map((page, index) => (
                <div key={index} className="bg-gradient-to-tr from-red-500 border to-yellow-400 border-white border-6 p-2 rounded ">{page}</div>
              ))}
            </div>
          </h3>
          <h3 className="text-lg mt-2">Queue:
            <div className="flex flex-wrap gap-1 mt-2">
              {queue.map((page, index) => (
                <div key={index} className="bg-gradient-to-tr from-purple-600 border to-pink-600 border-white border-6 p-2 rounded">{page}</div>
              ))}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FIFOPageReplacement;

