interface Props {
  rounds: number[][];
  currentRound: number;
}

const RoundsTable = ({ rounds, currentRound }: Props) => {
  if (!rounds) return "";

  return (
    <section id="rounds">
      <h3 className="font-bold text-2xl text-center">Runda {currentRound}</h3>
      {rounds.map((round, index) => {
        return (
          <p key={index} className="h-10 text-lg">
            <span className="font-semibold text-xl m-2 inline-block w-8 text-center">
              {round[0] + 1}
            </span>
            <span>
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
