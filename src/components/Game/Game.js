import backgroundImage from "../../media/background.jpg";
import "./Game.css";
import { HowToPlay } from "./HowToPlay/HowToPlay";

export const Game = () => {
  return (
    <div>
      <HowToPlay />
      <img className="bg-image" src={backgroundImage} alt="background-logo" />
    </div>
  );
};
