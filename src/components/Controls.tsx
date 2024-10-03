import BasicButton from "./BasicButton";

interface Props {
  currentRound: number;
  displayedRound: number;
  roundsNumber: number;
  isPlaying: boolean;
  prevRound: () => void;
  nextRound: () => void;
}

const Controls = ({
  currentRound,
  displayedRound,
  roundsNumber,
  isPlaying,
  prevRound,
  nextRound,
}: Props) => {
  return (
    <div>
      <BasicButton
        disableButton={displayedRound <= 1 || isPlaying}
        onClick={prevRound}
        className="px-4 py-2 text-sm transition-all text-gray-800 hover:-translate-y-0.5 font-bold uppercase m-4 select-none"
      >
        Poprzednia runda
      </BasicButton>
      <BasicButton
        disableButton={displayedRound >= roundsNumber || isPlaying}
        onClick={nextRound}
        className={`px-4 py-2 text-sm transition-all text-gray-800 hover:-translate-y-0.5 font-bold uppercase m-4 select-none rounded-md ${
          displayedRound === currentRound
            ? " bg-amber-300 hover:bg-amber-400"
            : ""
        }`}
      >
        Następna runda
      </BasicButton>
    </div>
  );
};

export default Controls;
