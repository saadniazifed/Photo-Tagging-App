import { Header } from "../Header/Header";
import { Game } from "../Game/Game";
import { useState } from "react";

export const Start = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  const howToPlayVisible = () => {
    setShowHowToPlay(true);
  };

  const howToPlayHide = () => {
    setShowHowToPlay(false);
  };

  return (
    <>
      <Header
        showHowToPlay={showHowToPlay}
        howToPlayVisible={howToPlayVisible}
        howToPlayHide={howToPlayHide}
      />
      <Game
        showHowToPlay={showHowToPlay}
        howToPlayVisible={howToPlayVisible}
        howToPlayHide={howToPlayHide}
      />
    </>
  );
};
