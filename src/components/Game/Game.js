import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const Game = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [leftCords, setLeftCord] = useState(0);
  const [topCords, setTopCord] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [characters, setCharacters] = useState([]);
  const charactersRef = collection(db, "character-locations");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(charactersRef);
      setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const dropDownVisible = () => {
    setShowDropDown(true);
  };

  const dropDownHide = (e) => {
    e.stopPropagation();
    setShowDropDown(false);
  };

  const topCord = (e) => {
    setTopCord(e.nativeEvent.offsetY);
    // console.log(`Top: ` + topCords);
  };

  const leftCord = (e) => {
    setLeftCord(e.nativeEvent.offsetX);
    // console.log(`Left: ` + leftCords);
  };

  const imageContainerWidth = (e) => {
    setWidth(e.currentTarget.offsetWidth);
    // console.log(`Width: ` + width);
  };

  const imageContainerHeight = (e) => {
    setHeight(e.currentTarget.offsetHeight);
    // console.log(`Height: ` + height);
  };

  const showHowToPlay = props.showHowToPlay;
  const howToPlayHide = props.howToPlayHide;

  const showLeaderboard = props.showLeaderboard;
  const leaderboardHide = props.leaderboardHide;

  return (
    <div className="image--wrapper">
      {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
      {showLeaderboard && <Leaderboard leaderboardHide={leaderboardHide} />}
      <div
        className="image--container"
        onClick={(e) => {
          dropDownVisible(e);
          topCord(e);
          leftCord(e);
          imageContainerWidth(e);
          imageContainerHeight(e);
        }}
      >
        <img
          className="bg-image"
          src={backgroundImage}
          alt="background-logo"
          onClick={(e) => {
            dropDownVisible(e);
          }}
        />
        {showDropDown && (
          <DropDownModal
            dropDownHide={dropDownHide}
            leftCords={leftCords}
            topCords={topCords}
            width={width}
            height={height}
            characters={characters}
          />
        )}
      </div>
    </div>
  );
};
