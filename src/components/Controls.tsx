interface Props {
  currentRound: number;
  roundsNumber: number;
  prevRound: () => void;
  nextRound: () => void;
}

const Controls = ({
  currentRound,
  roundsNumber,
  prevRound,
  nextRound,
}: Props) => {
  let buttonsDisabled = false;

  return (
    <div>
      <button
        className={`px-4 py-2 text-sm transition-all text-gray-800 hover:-translate-y-0.5 font-bold uppercase rounded-md m-4 select-none ${
          currentRound <= 1 || buttonsDisabled ? "disabled" : undefined
        }`}
        disabled={currentRound <= 1 || buttonsDisabled}
        onClick={prevRound}
      >
        Poprzednia runda
      </button>
      <button
        className={`px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:-translate-y-0.5 transition-all text-blue-950 font-bold uppercase rounded-md m-4 select-none ${
          currentRound >= roundsNumber || buttonsDisabled
            ? "disabled"
            : undefined
        }`}
        disabled={currentRound >= roundsNumber || buttonsDisabled}
        onClick={nextRound}
      >
        Następna runda
      </button>
    </div>
  );
};

export default Controls;
