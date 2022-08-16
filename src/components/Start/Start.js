import { Header } from "../Header/Header";
import { Game } from "../Game/Game";
import { useState } from "react";

export const Start = () => {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showLeaderboard, setShowleaderboard] = useState(false);

  const howToPlayVisible = () => {
    setShowHowToPlay(true);
  };

  const leaderboardVisible = () => {
    setShowleaderboard(true);
  };

  const howToPlayHide = () => {
    setShowHowToPlay(false);
  };

  const leaderboardHide = () => {
    setShowleaderboard(false);
  };

  return (
    <>
      <Header
        showHowToPlay={showHowToPlay}
        howToPlayVisible={howToPlayVisible}
        howToPlayHide={howToPlayHide}
        //
        showLeaderboard={showLeaderboard}
        leaderboardVisible={leaderboardVisible}
        leaderboardHide={leaderboardHide}
      />
      <Game
        showHowToPlay={showHowToPlay}
        howToPlayVisible={howToPlayVisible}
        howToPlayHide={howToPlayHide}
        //
        showLeaderboard={showLeaderboard}
        leaderboardVisible={leaderboardVisible}
        leaderboardHide={leaderboardHide}
      />
    </>
  );
};
