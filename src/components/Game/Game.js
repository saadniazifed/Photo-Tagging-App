import backgroundImage from "../../media/background.jpg";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";

export const Game = (props) => {
  const showHowToPlay = props.showHowToPlay;
  const howToPlayHide = props.howToPlayHide;

  return (
    <div>
      {showHowToPlay && <HowToPlay howToPlayHide={howToPlayHide} />}
      <img className="bg-image" src={backgroundImage} alt="background-logo" />
    </div>
  );
};
