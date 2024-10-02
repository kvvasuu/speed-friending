interface Props {
  rounds: number[][];
  currentRound: number;
}

const RoundsTable = ({ rounds, currentRound }: Props) => {
  if (!rounds) return "";

  return (
    <section id="rounds" className="w-full">
      <h3 className="font-bold text-2xl text-center">Runda {currentRound}</h3>
      {rounds.map((round, index) => {
        return (
          <p
            key={index}
            className="w-full h-10 flex justify-center items-center text-lg hover:bg-slate-100/20 select-none"
          >
            <span className="font-semibold text-xl m-2 inline-block w-8 text-center">
              {round[0] + 1}
            </span>
            <span className="text-center m-2 inline-block w-8">
              <i className="fa-solid fa-right-long opacity-90"></i>
            </span>
            <span className="font-semibold text-xl m-2 inline-block w-8 text-center">
              {round[1] + 1}
            </span>
          </p>
        );
      })}
    </section>
  );
};

export default RoundsTable;
