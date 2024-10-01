import { useState } from "react";

import RoundsTable from "./components/RoundsTable";

function generateRounds(numParticipants: number): number[][][] {
  if (numParticipants % 2 !== 0) {
    numParticipants += 1;
  }

  const rounds = [];
  const participants: number[] = [...Array(numParticipants).keys()];

  for (let round = 0; round < numParticipants - 1; round++) {
    const currentRound = [];

    for (let i = 0; i < numParticipants / 2; i++) {
      const p1 = participants[i];
      const p2 = participants[numParticipants - 1 - i];

      currentRound.push([p1, p2]);
    }

    rounds.push(currentRound);

    const popped = participants.pop();
    if (popped !== undefined) {
      participants.splice(1, 0, popped);
    }
  }

  return rounds;
}

function App() {
  const [participants, setParticipants] = useState(24);
  const [rounds, setRounds] = useState<number[][][]>([]);
  const [currentRound, setCurrentRound] = useState(1);

  const shuffleRounds = () => {
    setRounds(generateRounds(participants));
    setCurrentRound(1);
  };

  const nextRound = () => {
    if (currentRound >= rounds.length) return;
    setCurrentRound((prev) => prev + 1);
  };

  const prevRound = () => {
    if (currentRound <= 1) return;
    setCurrentRound((prev) => prev - 1);
  };

  return (
    <>
      <h1 className="text-4xl m-4">Speed Friending</h1>
      <input
        type="number"
        className="w-1/2 bg-gray-400 rounded-md p-2 m-4 text-blue-950"
        value={participants}
        min="2"
        max="100"
        onChange={(e) => setParticipants(Number(e.currentTarget.value))}
      />

      <button
        className="px-4 py-2 bg-amber-500 hover:bg-amber-700 transition-all text-blue-950 font-bold uppercase rounded-md mb-4"
        onClick={shuffleRounds}
      >
        Generuj
      </button>
      <RoundsTable
        rounds={rounds[currentRound - 1]}
        currentRound={currentRound}
      ></RoundsTable>
      <div>
        <button
          className="px-4 py-2 bg-amber-500 hover:bg-amber-700 transition-all text-blue-950 font-bold uppercase rounded-md m-4"
          onClick={prevRound}
        >
          Poprzednia runda
        </button>
        <button
          className="px-4 py-2 bg-amber-500 hover:bg-amber-700 transition-all text-blue-950 font-bold uppercase rounded-md m-4"
          onClick={nextRound}
        >
          Następna runda
        </button>
      </div>
    </>
  );
}

export default App;
