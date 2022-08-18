import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { useState, useEffect } from "react";

export const Game = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [leftCords, setLeftCord] = useState(0);
  const [topCords, setTopCord] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  //Point to note: Fix the bug of useState.

  const dropDownVisible = () => {
    setShowDropDown(true);
  };

  const dropDownHide = () => {
    setShowDropDown(false);
  };

  const topCord = (e) => {
    setTopCord(e.nativeEvent.offsetY);
  };

  const leftCord = (e) => {
    setLeftCord(e.nativeEvent.offsetX);
  };

  const imageContainerWidth = (e) => {
    setWidth(e.currentTarget.offsetWidth);
  };

  const imageContainerHeight = (e) => {
    setHeight(e.currentTarget.offsetHeight);
  };

  const showHowToPlay = props.showHowToPlay;
  const howToPlayHide = props.howToPlayHide;

  const showLeaderboard = props.showLeaderboard;
  const leaderboardHide = props.leaderboardHide;

  return (
    <div className="image--wrapper">
      {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
      {showLeaderboard && <Leaderboard leaderboardHide={leaderboardHide} />}
      <div className="image--container">
        <img
          className="bg-image"
          src={backgroundImage}
          alt="background-logo"
          onClick={(e) => {
            dropDownVisible();
            topCord(e);
            leftCord(e);
            imageContainerWidth(e);
            imageContainerHeight(e);
          }}
        />
        {showDropDown && (
          <DropDownModal
            dropDownHide={dropDownHide}
            leftCords={leftCords}
            topCords={topCords}
            width={width}
            height={height}
          />
        )}
      </div>
    </div>
  );
};
