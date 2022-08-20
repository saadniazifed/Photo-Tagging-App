import Chris from "../../../media/findCharacters/Chris.png";
import Dog from "../../../media/findCharacters/BrianGriffin.png";
import Kratos from "../../../media/findCharacters/Kratos.png";
import Link from "../../../media/findCharacters/Link.png";
import Tom from "../../../media/findCharacters/Tom.png";

import "./HowToPlay.css";

export const HowToPlay = (props) => {
  const howToPlayHide = props.howToPlayHide;

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
        <p className="information--p">
          Once you find one, left-click it and select the appropriate character.
        </p>
        <p>Enjoy!</p>
      </div>

      <button className="cancel--btn" onClick={howToPlayHide}>
        <svg xmlns="" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
        </svg>
      </button>
    </div>
  );
};
