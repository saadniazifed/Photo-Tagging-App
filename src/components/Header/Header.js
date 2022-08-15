import "./Header.css";
import questionMark from "../../media/questionMark.png";
import leaderboard from "../../media/leaderboard.png";

export const Header = () => {
  return (
    <div className="header--container">
      <h1>
        <a href="/Photo-Tagging-App">FantasticFive</a>
      </h1>

      <nav className="nav--container">
        <li className="li--center">
          <img src={questionMark} alt="question-mark" />
          How to Play
        </li>
        <li className="li--center">
          <img src={leaderboard} alt="leaderboard" />
          Leaderboard
        </li>
        <li className="li--center">
          <a href="https://github.com/saadniazifed/Photo-Tagging-App">Github</a>
        </li>
      </nav>
    </div>
  );
};
