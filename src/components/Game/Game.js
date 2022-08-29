import backgroundImage from "../../media/background.jpg";
import { DropDownModal } from "./DropDownModal/DropDownModal";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";
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
  const [chrisTop, setChrisTop] = useState(0);
  const [chrisLeft, setChrisLeft] = useState(0);
  const [brianTop, setBrianTop] = useState(0);
  const [brianLeft, setBrianLeft] = useState(0);

  const [characters, setCharacters] = useState();

  const [chrisFound, setChrisFound] = useState(false);
  const [griffinFound, setGriffinFound] = useState(false);
  const [kratosFound, setKratosFound] = useState(false);
  const [linkFound, setLinkFound] = useState(false);
  const [tomFound, setTomFound] = useState(false);

  const top = `${100 * (topCords / height)}`;
  const roundTop = Math.round(top);

  const left = `${100 * (leftCords / width)}`;
  const roundLeft = Math.round(left);

  const charactersRef = collection(db, "character-locations");

  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(charactersRef);
      setCharacters(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCharacters();
  }, [characters, charactersRef]);

  useEffect(() => {
    const getChrisTop = async () => {
      const data = await getDocs(charactersRef);
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setChrisTop(
        data.docs[0]._document.data.value.mapValue.fields.ChrisTop.integerValue
        //To access the value from the backend for the `top position`
      );
    };
    getChrisTop();
  }, []);

  useEffect(() => {
    const getChrisLeft = async () => {
      const data = await getDocs(charactersRef);
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setChrisLeft(
        data.docs[0]._document.data.value.mapValue.fields.ChrisLeft.integerValue
        //To access the value from the backend for the `left position`
      );
    };

    getChrisLeft();
  }, []);

  useEffect(() => {
    const getBrianTop = async () => {
      const data = await getDocs(charactersRef);
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBrianTop(
        data.docs[1]._document.data.value.mapValue.fields.GriffinTop
          .integerValue
        //To access the value from the backend for the `top position`
      );
    };
    getBrianTop();
    console.log(brianTop);
  }, []);

  useEffect(() => {
    const getBrianLeft = async () => {
      const data = await getDocs(charactersRef);
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBrianLeft(
        data.docs[1]._document.data.value.mapValue.fields.GriffinLeft
          .integerValue
        //To access the value from the backend for the `left position`
      );
    };

    getBrianLeft();
    console.log(brianLeft);
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

  return (
    <div className="image--wrapper">
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
        {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
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
            style={
              chrisFound
                ? {
                    display: "block",
                    top: `${chrisTop}%`,
                    left: `${chrisLeft}%`,
                    position: "absolute",
                  }
                : {
                    display: "none",
                  }
            }
          />
        )}

        {griffinFound && (
          <img
            src={greenCheck}
            alt="griffin-found"
            className="griffin-green-tick"
            style={
              chrisFound
                ? {
                    display: "block",
                    top: `${brianTop}%`,
                    left: `${brianLeft}%`,
                    position: "absolute",
                  }
                : { display: "none" }
            }
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
            top={top}
            left={left}
            roundTop={roundTop}
            roundLeft={roundLeft}
            chrisFound={chrisFound}
          />
        )}
      </div>
    </div>
  );
};
