import Chris from "../../../media/findCharacters/Chris.png";
import Dog from "../../../media/findCharacters/BrianGriffin.png";
import Kratos from "../../../media/findCharacters/Kratos.png";
import Link from "../../../media/findCharacters/Link.png";
import Tom from "../../../media/findCharacters/Tom.png";

import "./HowToPlay.css";

export const HowToPlay = () => {
  return (
    <div className="how-to-container">
      <div className="information">
        <h2>Welcome!</h2>
        <p>Your goal is to find 5 characters in the images below!</p>
        <div className="images--container">
          <div className="images--div">
            <img src={Chris} alt="chris-family-guy" />
            <p>Chris</p>
          </div>
          <div className="images--div">
            <img src={Dog} alt="brian-griffin-family-guy" />
            <p>Brian</p>
          </div>
          <div className="images--div">
            <img src={Kratos} alt="Kratos" />
            <p>Kratos</p>
          </div>
          <div className="images--div">
            <img src={Link} alt="Link" />
            <p>Link</p>
          </div>
          <div className="images--div">
            <img src={Tom} alt="Tom" />
            <p>Tom</p>
          </div>
        </div>
        <p>
          Once you find one, left-click it and select the appropriate character.
          The faster you spot them, the higher your ranking will be!
        </p>
        <p>Enjoy!</p>
      </div>
    </div>
  );
};
