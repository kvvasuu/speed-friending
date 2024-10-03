import { useState } from "react";

import RoundsTable from "./components/RoundsTable";
import Controls from "./components/Controls";
import Header from "./components/Header.tsx";
import Timer from "./components/Timer.tsx";
import BasicButton from "./components/BasicButton.tsx";
import HomeScreen from "./components/HomeScreen.tsx";

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
  const [participants, setParticipants] = useState<number>(24);
  const [rounds, setRounds] = useState<number[][][]>([]);
  const [displayedRound, setDisplayedRound] = useState<number>(1);
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [roundDuration, setRoundDuration] = useState<number>(60);

  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);

  const shuffleRounds = () => {
    setRounds(generateRounds(participants));
  };

  const startGame = () => {
    setIsPlaying(true);
  };

  const nextRound = () => {
    if (displayedRound >= rounds.length) return;
    setDisplayedRound((prev) => prev + 1);
    if (displayedRound === currentRound) setIsPlaying(true);
  };

  const prevRound = () => {
    if (displayedRound <= 1) return;
    setDisplayedRound((prev) => prev - 1);
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
            <HomeScreen
              setParticipants={(e) => setParticipants(e)}
              setRoundDuration={(e) => setRoundDuration(e)}
              participants={participants}
              roundDuration={roundDuration}
              shuffleRounds={shuffleRounds}
            ></HomeScreen>
          </>
        ) : (
          <>
            {isPlaying === null ? null : (
              <Timer
                isPlaying={isPlaying}
                initialValue={roundDuration}
                handleTimerEnd={() => {
                  setIsPlaying(false);
                  setCurrentRound((round) => round + 1);
                }}
              ></Timer>
            )}

            <RoundsTable
              rounds={rounds[displayedRound - 1]}
              currentRound={displayedRound}
            ></RoundsTable>
            {isPlaying === null ? (
              <BasicButton
                className="px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:-translate-y-0.5 transition-all text-blue-950 font-bold uppercase rounded-md m-4 select-none shadow-sm"
                onClick={startGame}
              >
                Start
              </BasicButton>
            ) : (
              <Controls
                isPlaying={isPlaying}
                currentRound={displayedRound}
                roundsNumber={rounds.length}
                prevRound={prevRound}
                nextRound={nextRound}
              ></Controls>
            )}
          </>
        )}
      </div>
      {rounds.length > 0 && (
        <button
          className="px-4 py-2 text-xs  transition-all text-gray-800/80 hover:-translate-y-0.5 hover:bg-slate-100/50 font-bold uppercase rounded-md m-4 select-none"
          onClick={() => {
            setRounds([]);
            setCurrentRound(0);
            setDisplayedRound(1);
            setIsPlaying(null);
          }}
        >
          Wyjście
        </button>
      )}
    </>
  );
}

export default App;
