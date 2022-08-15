import backgroundImage from "../../media/background.jpg";
import "./Game.css";
export const Game = () => {
  return (
    <>
      <div>
        <img className="bg-image" src={backgroundImage} alt="background-logo" />
      </div>
    </>
  );
};
