import { useState } from "react";

import RoundsTable from "./components/RoundsTable";
import Controls from "./components/Controls";
import Header from "./components/Header.tsx";

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
      <Header></Header>
      <div
        id="main"
        className="flex flex-col items-center drop-shadow-sm backdrop-blur-lg  bg-slate-100/50 border-[1px] border-slate-100/25 rounded-xl p-4 min-w-80 sm:min-w-96 
      "
      >
        {rounds.length <= 0 ? (
          <>
            <label className="text-slate-800 text-xl font-semibold">
              Podaj liczbę uczestników:
            </label>
            <input
              type="number"
              className="w-20 bg-gray-200 rounded-md p-2 m-4 text-blue-950 text-center outline-none"
              value={participants}
              min="2"
              step="2"
              max="100"
              onChange={(e) => setParticipants(Number(e.currentTarget.value))}
            />
            <button
              className="px-4 py-2 bg-amber-300 hover:bg-amber-400 transition-all text-blue-950 font-bold uppercase rounded-md m-4 select-none shadow-sm"
              onClick={shuffleRounds}
            >
              Rozpocznij
            </button>
          </>
        ) : (
          <>
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
        )}
      </div>
    </>
  );
}

export default App;
