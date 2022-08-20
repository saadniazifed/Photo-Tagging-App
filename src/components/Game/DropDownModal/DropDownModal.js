import "./DropDownModal.css";
import Chris from "../../../media/findCharacters/Chris.png";
import Dog from "../../../media/findCharacters/BrianGriffin.png";
import Kratos from "../../../media/findCharacters/Kratos.png";
import Link from "../../../media/findCharacters/Link.png";
import Tom from "../../../media/findCharacters/Tom.png";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export const DropDownModal = (props) => {
  const dropDownHide = props.dropDownHide;
  const leftCords = props.leftCords;
  const topCords = props.topCords;
  const width = props.width;
  const height = props.height;
  const characters = props.characters;
  const setChrisFound = props.setChrisFound;
  const setGriffinFound = props.setGriffinFound;
  const setKratosFound = props.setKratosFound;
  const setLinkFound = props.setLinkFound;
  const setTomFound = props.setTomFound;

  const top = `${100 * (topCords / height)}`;
  const left = `${100 * (leftCords / width)}`;
  const roundTop = Math.round(top);
  const roundLeft = Math.round(left);

  const chrisLocation = (e) => {
    console.log(e.target);
    const chrisTop = characters[0].ChrisTop;
    const chrisLeft = characters[0].ChrisLeft;
    if (
      ((roundTop >= 92 && roundTop <= 94) || roundTop === chrisTop) &&
      ((roundTop >= 91 && roundTop <= 94) || roundLeft === chrisLeft)
    ) {
      setChrisFound(true);
      const parentNode = e.target.parentNode.parentNode;
      parentNode.setAttribute("style", "pointer-events: none");
      console.log(parentNode);
    }
  };

  const griffinLocation = (e) => {
    const griffinTop = characters[1].GriffinTop;
    const griffinLeft = characters[1].GriffinLeft;

    if (
      ((roundTop >= 71 && roundTop <= 73) || roundTop === griffinTop) &&
      ((roundLeft >= 14 && roundTop <= 16) || roundLeft === griffinLeft)
    ) {
      setGriffinFound(true);
      const parentNode = e.target.parentNode.parentNode;
      parentNode.setAttribute("style", "pointer-events: none");
    }
  };

  const kratosLocation = () => {
    const kratosTop = characters[2].KratosTop;
    const kratosLeft = characters[2].KratosLeft;

    if (
      ((roundTop >= 86 && roundTop <= 89) || roundTop === kratosTop) &&
      ((roundLeft >= 58 && roundLeft <= 62) || roundLeft === kratosLeft)
    ) {
      setKratosFound(true);
    }
  };

  const linkLocation = () => {
    const linkTop = characters[3].LinkTop;
    const linkLeft = characters[3].LinkLeft;

    if (
      ((roundTop >= 94 && roundTop <= 96) || roundTop === linkTop) &&
      ((roundLeft >= 21 && roundLeft <= 24) || roundLeft === linkLeft)
    ) {
      setLinkFound(true);
    }
  };

  const tomLocation = () => {
    const tomTop = characters[4].TomTop;
    const tomLeft = characters[4].TomLeft;

    if (
      ((roundTop >= 94 && roundTop <= 96) || roundTop === tomTop) &&
      ((roundLeft >= 84 && roundLeft <= 89) || roundLeft === tomLeft)
    ) {
      setTomFound(true);
    }
  };

  return (
    <div>
      <div
        className="dropdown--modal"
        style={{
          top: `${top}%`,
          left: `${left}%`,
        }}
      >
        <div className="chrisParent" onClick={(e) => chrisLocation(e)}>
          <div className="child1">
            <img src={Chris} alt="Chris-family-guy" />
          </div>
          <div className="child2">
            <p>Chris</p>
          </div>
        </div>

        <div className="griffinParent" onClick={(e) => griffinLocation(e)}>
          <div className="child1">
            <img src={Dog} alt="Griffin-family-guy" />
          </div>
          <div className="child2">
            <p>Griffin</p>
          </div>
        </div>

        <div className="kratosParent" onClick={kratosLocation}>
          <div className="child1">
            <img src={Kratos} alt="Kratos" />
          </div>
          <div className="child2">
            <p>Kratos</p>
          </div>
        </div>

        <div className="linkParent" onClick={linkLocation}>
          <div className="child1">
            <img src={Link} alt="Link" />
          </div>
          <div className="child2">
            <p>Link</p>
          </div>
        </div>

        <div className="tomParent" onClick={tomLocation}>
          <div className="child1">
            <img src={Tom} alt="Tom" />
          </div>
          <div className="child2">
            <p>Tom</p>
          </div>
        </div>

        <button className="cancel--btn--dropdown" onClick={dropDownHide}>
          <svg xmlns="" width="14" height="14" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
