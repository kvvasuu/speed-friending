import { useState, useEffect } from "react";

import RoundsTable from "./components/RoundsTable";
import Controls from "./components/Controls";

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

  useEffect(() => {
    shuffleRounds();
  }, [participants]);

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
      <h1 className="text-5xl m-4 font-bold uppercase text-yellow-600 drop-shadow-sm font-title tracking-widest select-none text-center">
        Speed Friending
      </h1>
      <input
        type="number"
        className="w-20 bg-gray-200 rounded-md p-2 m-4 text-blue-950 text-center"
        value={participants}
        min="2"
        max="100"
        onChange={(e) => setParticipants(Number(e.currentTarget.value))}
      />

      <RoundsTable
        rounds={rounds[currentRound - 1]}
        currentRound={currentRound}
      ></RoundsTable>
      <Controls
        currentRound={currentRound}
        roundsNumber={rounds.length}
        prevRound={prevRound}
        nextRound={nextRound}
      ></Controls>
    </>
  );
}

export default App;
