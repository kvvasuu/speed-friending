import BasicButton from "./BasicButton";

interface Props {
  currentRound: number;
  roundsNumber: number;
  isPlaying: boolean;
  prevRound: () => void;
  nextRound: () => void;
}

const Controls = ({
  currentRound,
  roundsNumber,
  isPlaying,
  prevRound,
  nextRound,
}: Props) => {
  return (
    <div>
      <BasicButton
        disableButton={currentRound <= 1 || isPlaying}
        onClick={prevRound}
        className="px-4 py-2 text-sm transition-all text-gray-800 hover:-translate-y-0.5 font-bold uppercase m-4 select-none"
      >
        Poprzednia runda
      </BasicButton>
      <BasicButton
        disableButton={currentRound >= roundsNumber || isPlaying}
        onClick={nextRound}
        className="px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:-translate-y-0.5 transition-all text-blue-950 font-bold uppercase rounded-md m-4 select-none"
      >
        Następna runda
      </BasicButton>
    </div>
  );
};

export default Controls;
