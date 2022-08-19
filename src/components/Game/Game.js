import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
import { Leaderboard } from "./Leaderboard/Leaderboard";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import greenCheck from "../../media/greenCheck.png";

export const Game = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [leftCords, setLeftCord] = useState(0);
  const [topCords, setTopCord] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [characters, setCharacters] = useState([]);
  const [chrisFound, setChrisFound] = useState(false);
  const [griffinFound, setGriffinFound] = useState(false);
  const [kratosFound, setKratosFound] = useState(false);
  const [linkFound, setLinkFound] = useState(false);
  const [tomFound, setTomFound] = useState(false);

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

        {chrisFound && (
          <img
            src={greenCheck}
            alt="chris-found"
            className="chris-green-tick"
            style={chrisFound ? { display: "block" } : { display: "none" }}
          />
        )}

        {griffinFound && (
          <img
            src={greenCheck}
            alt="griffin-found"
            className="griffin-green-tick"
            style={chrisFound ? { display: "block" } : { display: "none" }}
          />
        )}

        {kratosFound && (
          <img
            src={greenCheck}
            alt="griffin-found"
            className="kratos-green-tick"
            style={kratosFound ? { display: "block" } : { display: "none" }}
          />
        )}

        {linkFound && (
          <img
            src={greenCheck}
            alt="link-found"
            className="link-green-tick"
            style={linkFound ? { display: "block" } : { display: "none" }}
          />
        )}

        <img
          src={greenCheck}
          alt="link-found"
          className="link-green-tick"
          // style={linkFound ? { display: "block" } : { display: "none" }}
        />

        {tomFound && (
          <img
            src={greenCheck}
            alt="tom-found"
            className="tom-green-tick"
            style={tomFound ? { display: "block" } : { display: "none" }}
          />
        )}

        {showDropDown && (
          <DropDownModal
            dropDownHide={dropDownHide}
            leftCords={leftCords}
            topCords={topCords}
            width={width}
            height={height}
            characters={characters}
            setChrisFound={setChrisFound}
            setGriffinFound={setGriffinFound}
            setKratosFound={setKratosFound}
            setLinkFound={setLinkFound}
            setTomFound={setTomFound}
          />
        )}
      </div>
    </div>
  );
};
