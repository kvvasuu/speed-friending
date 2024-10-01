interface Props {
  rounds: number[][];
  currentRound: number;
}

const RoundsTable = ({ rounds, currentRound }: Props) => {
  if (!rounds) return "";

  return (
    <section id="rounds">
      <table>
        <thead>
          <tr>
            <td className="font-bold text-xl">Runda {currentRound}</td>
          </tr>
        </thead>
        <tbody>
          {rounds.map((round, index) => {
            return (
              <tr key={index}>
                <td>{round[0]}</td>
                <td>{round[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default RoundsTable;
