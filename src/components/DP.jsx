// import React, { useState } from 'react';

// const DiningPhilosophers = () => {
//   const [philosophers, setPhilosophers] = useState([
//     { id: 0, state: 'thinking', leftChopstick: null, rightChopstick: null },
//     { id: 1, state: 'thinking', leftChopstick: null, rightChopstick: null },
//     { id: 2, state: 'thinking', leftChopstick: null, rightChopstick: null },
//     { id: 3, state: 'thinking', leftChopstick: null, rightChopstick: null },
//     { id: 4, state: 'thinking', leftChopstick: null, rightChopstick: null },
//   ]);

//   const semaphore = {
//     mutex: 1, // Semaphore for mutual exclusion
//     chopsticks: new Array(5).fill(1), // Semaphore array for chopsticks
//   };

//   const THINKING = 'thinking';
//   const HUNGRY = 'hungry';
//   const EATING = 'eating';

//   const pickUpChopsticks = (id) => {
//     const leftFork = id;
//     const rightFork = (id + 1) % 5;

//     const leftNeighbor = philosophers[(id + 4) % 5];
//     const rightNeighbor = philosophers[(id + 1) % 5];

//     if (
//       philosophers[id].state !== EATING &&
//       leftNeighbor.state !== EATING &&
//       rightNeighbor.state !== EATING &&
//       semaphore.mutex > 0 &&
//       semaphore.chopsticks[leftFork] > 0 &&
//       semaphore.chopsticks[rightFork] > 0
//     ) {
//       semaphore.mutex--;
//       semaphore.chopsticks[leftFork]--;
//       semaphore.chopsticks[rightFork]--;

//       setPhilosophers((prevPhilosophers) => {
//         const newPhilosophers = [...prevPhilosophers];
//         newPhilosophers[id].state = EATING;
//         newPhilosophers[id].leftChopstick = leftFork;
//         newPhilosophers[id].rightChopstick = rightFork;
//         return newPhilosophers;
//       });
//     } else {
//       block(id);
//     }
//   };

//   const putDownChopsticks = (id) => {
//     const leftFork = philosophers[id].leftChopstick;
//     const rightFork = philosophers[id].rightChopstick;

//     semaphore.mutex++;
//     semaphore.chopsticks[leftFork]++;
//     semaphore.chopsticks[rightFork]++;

//     setPhilosophers((prevPhilosophers) => {
//       const newPhilosophers = [...prevPhilosophers];
//       newPhilosophers[id].state = THINKING;
//       newPhilosophers[id].leftChopstick = null;
//       newPhilosophers[id].rightChopstick = null;
//       return newPhilosophers;
//     });

//     // Check and activate neighbors if possible
//     if (philosophers[(id + 4) % 5].state === HUNGRY) {
//       activate((id + 4) % 5);
//     }
//     if (philosophers[(id + 1) % 5].state === HUNGRY) {
//       activate((id + 1) % 5);
//     }
//   };

//   const block = (id) => {
//     setPhilosophers((prevPhilosophers) => {
//       const newPhilosophers = [...prevPhilosophers];
//       newPhilosophers[id].state = HUNGRY;
//       return newPhilosophers;
//     });
//   };

//   const activate = (id) => {
//     setTimeout(() => {
//       pickUpChopsticks(id);
//     }, Math.random() * 1000); // Random delay to prevent deadlock
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4 text-center">DINING  PHILOSOPHERS PROBLEM WITH SEMAPHORES</h1>
//       {philosophers.map((philosopher) => (
//         <div key={philosopher.id} className="border border-white p-4 rounded-lg mb-4">
//           <p className="text-xl font-semibold">Philosopher {philosopher.id}</p>
//           <p className="mb-2 text-teal-300">State: {philosopher.state}</p>
//           {philosopher.leftChopstick !== null && <p>Left Chopstick : {philosopher.leftChopstick}</p>}
//           {philosopher.rightChopstick !== null && <p>Right Chopstick : {philosopher.rightChopstick}</p>}
//           <div className="flex gap-4">
//   <button
//     onClick={() => pickUpChopsticks(philosopher.id)}
//     className="flex-2 px-4 py-2 rounded text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 border border-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
//   >
//     Pick Up Chopsticks
//   </button>

//   <button
//             onClick={() => putDownChopsticks(philosopher.id)}
//             className="flex-2 px-4 py-2 rounded text-slate-900 bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-orange-400 hover:to-yellow-300 border border-white shadow-lg hover:shadow-xl transition duration-300 smooth"
//           >
//             Put Down Chopsticks
//           </button>
// </div>


//         </div>
//       ))}
//     </div>
//   );
// };

// export default DiningPhilosophers;

import React, { useState } from 'react';

const DiningPhilosophers = () => {
  const [philosophers, setPhilosophers] = useState([
    { id: 0, state: 'thinking', leftChopstick: null, rightChopstick: null },
    { id: 1, state: 'thinking', leftChopstick: null, rightChopstick: null },
    { id: 2, state: 'thinking', leftChopstick: null, rightChopstick: null },
    { id: 3, state: 'thinking', leftChopstick: null, rightChopstick: null },
    { id: 4, state: 'thinking', leftChopstick: null, rightChopstick: null },
  ]);

  const semaphore = {
    mutex: 1, // Semaphore for mutual exclusion
    chopsticks: new Array(5).fill(1), // Semaphore array for chopsticks
  };

  const THINKING = 'thinking';
  const HUNGRY = 'hungry';
  const EATING = 'eating';

  const pickUpChopsticks = (id) => {
    const leftFork = id;
    const rightFork = (id + 1) % 5;

    const leftNeighbor = philosophers[(id + 4) % 5];
    const rightNeighbor = philosophers[(id + 1) % 5];

    if (
      philosophers[id].state !== EATING &&
      leftNeighbor.state !== EATING &&
      rightNeighbor.state !== EATING &&
      semaphore.mutex > 0 &&
      semaphore.chopsticks[leftFork] > 0 &&
      semaphore.chopsticks[rightFork] > 0
    ) {
      semaphore.mutex--;
      semaphore.chopsticks[leftFork]--;
      semaphore.chopsticks[rightFork]--;

      setPhilosophers((prevPhilosophers) => {
        const newPhilosophers = [...prevPhilosophers];
        newPhilosophers[id].state = EATING;
        newPhilosophers[id].leftChopstick = leftFork;
        newPhilosophers[id].rightChopstick = rightFork;
        return newPhilosophers;
      });
    } else {
      block(id);
    }
  };

  const putDownChopsticks = (id) => {
    const leftFork = philosophers[id].leftChopstick;
    const rightFork = philosophers[id].rightChopstick;

    semaphore.mutex++;
    semaphore.chopsticks[leftFork]++;
    semaphore.chopsticks[rightFork]++;

    setPhilosophers((prevPhilosophers) => {
      const newPhilosophers = [...prevPhilosophers];
      newPhilosophers[id].state = THINKING;
      newPhilosophers[id].leftChopstick = null;
      newPhilosophers[id].rightChopstick = null;
      return newPhilosophers;
    });

    // Check and activate neighbors if possible
    if (philosophers[(id + 4) % 5].state === HUNGRY) {
      activate((id + 4) % 5);
    }
    if (philosophers[(id + 1) % 5].state === HUNGRY) {
      activate((id + 1) % 5);
    }
  };

  const block = (id) => {
    setPhilosophers((prevPhilosophers) => {
      const newPhilosophers = [...prevPhilosophers];
      newPhilosophers[id].state = HUNGRY;
      return newPhilosophers;
    });
  };

  const activate = (id) => {
    setTimeout(() => {
      pickUpChopsticks(id);
    }, Math.random() * 1000); // Random delay to prevent deadlock
  };

  return (
    <div className="container h-screen mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">DINING PHILOSOPHERS PROBLEM WITH SEMAPHORES</h1>
      <div className="flex flex-wrap justify-center">
        {philosophers.map((philosopher) => (
          <div key={philosopher.id} className="border border-white p-4 rounded-lg my-4 mx-4" style={{ width: '550px' }}>
            <p className="text-xl font-semibold">Philosopher {philosopher.id}</p>
            <p className="mb-2 text-teal-300">State: {philosopher.state}</p>
            {philosopher.leftChopstick !== null && <p>Left Chopstick : {philosopher.leftChopstick}</p>}
            {philosopher.rightChopstick !== null && <p>Right Chopstick : {philosopher.rightChopstick}</p>}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => pickUpChopsticks(philosopher.id)}
                className="flex-2 px-4 py-2 rounded text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 border border-white shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              >
                Pick Up Chopsticks
              </button>
              <button
                onClick={() => putDownChopsticks(philosopher.id)}
                className="flex-2 px-4 py-2 rounded text-slate-900 bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-orange-400 hover:to-yellow-300 border border-white shadow-lg hover:shadow-xl transition duration-300 smooth"
              >
                Put Down Chopsticks
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiningPhilosophers;
