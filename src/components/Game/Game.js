import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { useState } from "react";

export const Game = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const dropDownVisible = () => {
    setShowDropDown(true);
  };

  const dropDownHide = () => {
    setShowDropDown(false);
  };

  const topCord = (e) => {
    const y = e.offsetY;
    console.log(y);
    return y;
  };

  const leftCord = (e) => {
    const x = e.offsetX;
    console.log(x);
    return x;
  };

  const showHowToPlay = props.showHowToPlay;
  const howToPlayHide = props.howToPlayHide;

  const showLeaderboard = props.showLeaderboard;
  const leaderboardHide = props.leaderboardHide;

  return (
    <div>
      {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
      {showLeaderboard && <Leaderboard leaderboardHide={leaderboardHide} />}

      <img
        className="bg-image"
        src={backgroundImage}
        alt="background-logo"
        onClick={(e) => {
          dropDownVisible();
          topCord(e);
          leftCord(e);
        }}
      />
      {showDropDown && (
        <DropDownModal
          dropDownHide={dropDownHide}
          leftCord={leftCord}
          topCord={topCord}
        />
      )}
    </div>
  );
};
