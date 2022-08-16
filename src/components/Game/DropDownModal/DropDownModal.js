import "./DropDownModal.css";
import Chris from "../../../media/findCharacters/Chris.png";
import Dog from "../../../media/findCharacters/BrianGriffin.png";
import Kratos from "../../../media/findCharacters/Kratos.png";
import Link from "../../../media/findCharacters/Link.png";
import Tom from "../../../media/findCharacters/Tom.png";

export const DropDownModal = () => {
  return (
    <>
      <ul className="dropdown--modal">
        <li className="images--div">
          <img src={Chris} alt="chris-family-guy" />
          <p>Chris</p>
        </li>
        <li className="images--div">
          <img src={Dog} alt="brian-griffin-family-guy" />
          <p>Brian</p>
        </li>
        <li className="images--div">
          <img src={Kratos} alt="Kratos" />
          <p>Kratos</p>
        </li>
        <li className="images--div">
          <img src={Link} alt="Link" />
          <p>Link</p>
        </li>
        <li className="images--div">
          <img src={Tom} alt="Tom" />
          <p>Tom</p>
        </li>
      </ul>
    </>
  );
};
