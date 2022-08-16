import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
import { Leaderboard } from "./Leaderboard/Leaderboard";

export const Game = (props) => {
  const showHowToPlay = props.showHowToPlay;
  const howToPlayHide = props.howToPlayHide;

  const showLeaderboard = props.showLeaderboard;
  const leaderboardHide = props.leaderboardHide;

  return (
    <div>
      {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
      {showLeaderboard && <Leaderboard leaderboardHide={leaderboardHide} />}
      <img className="bg-image" src={backgroundImage} alt="background-logo" />
      <DropDownModal />
    </div>
  );
};
