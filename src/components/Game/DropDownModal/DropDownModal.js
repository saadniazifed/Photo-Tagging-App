import "./DropDownModal.css";
import Chris from "../../../media/findCharacters/Chris.png";
import Dog from "../../../media/findCharacters/BrianGriffin.png";
import Kratos from "../../../media/findCharacters/Kratos.png";
import Link from "../../../media/findCharacters/Link.png";
import Tom from "../../../media/findCharacters/Tom.png";

export const DropDownModal = () => {
  return (
    <>
      <div className="dropdown--modal">
        <div class="Parent">
          <div class="child1">
            <img src={Chris} alt="Chris-family-guy" />
          </div>
          <div class="child2">
            <p>Chris</p>
          </div>
        </div>

        <div class="Parent">
          <div class="child1">
            <img src={Dog} alt="Griffin-family-guy" />
          </div>
          <div class="child2">
            <p>Griffin</p>
          </div>
        </div>

        <div class="Parent">
          <div class="child1">
            <img src={Kratos} alt="Kratos" />
          </div>
          <div class="child2">
            <p>Kratos</p>
          </div>
        </div>

        <div class="Parent">
          <div class="child1">
            <img src={Link} alt="Kratos" />
          </div>
          <div class="child2">
            <p>Link</p>
          </div>
        </div>

        <div class="Parent">
          <div class="child1">
            <img src={Tom} alt="Kratos" />
          </div>
          <div class="child2">
            <p>Tom</p>
          </div>
        </div>

        <button className="cancel--btn">
          <svg xmlns="" width="14" height="14" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
