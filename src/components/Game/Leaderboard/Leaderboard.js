import "./Leaderboard.css";

export const Leaderboard = (props) => {
  const leaderboardHide = props.leaderboardHide;

  return (
    <div className="leaderboard--container">
      <h2>Leaderboards - Top 10</h2>
      <table className="leaderboard--table">
        <thead>
          <tr className="header--row">
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <button className="cancel--btn" onClick={leaderboardHide}>
        <svg xmlns="" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
        </svg>
      </button>
    </div>
  );
};
