import BasicButton from "./BasicButton";

interface Props {
  participants: number;
  setParticipants: (number: number) => void;
  shuffleRounds: () => void;
  roundDuration: number;
  setRoundDuration: (number: number) => void;
}

const HomeScreen = ({
  participants,
  setParticipants,
  shuffleRounds,
  roundDuration,
  setRoundDuration,
}: Props) => {
  return (
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
      <label className="text-slate-800 text-xl font-semibold">
        Czas rundy:
      </label>
      <input
        type="number"
        className="w-20 bg-gray-200 rounded-md p-2 m-4 text-blue-950 text-center outline-none"
        value={roundDuration}
        min="10"
        step="10"
        max="1000"
        onChange={(e) => setRoundDuration(Number(e.currentTarget.value))}
      />
      <BasicButton
        className="px-4 py-2 bg-amber-300 hover:bg-amber-400 hover:-translate-y-0.5 transition-all text-blue-950 font-bold uppercase rounded-md m-4 select-none shadow-sm"
        onClick={shuffleRounds}
      >
        Losuj
      </BasicButton>
    </>
  );
};

export default HomeScreen;
