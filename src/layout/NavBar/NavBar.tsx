import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useAppDispatch } from "@hooks/redux";
import { toggleMenu } from "@store/menu/menu.slice";
import { toggleCreateNoteModal } from "@store/modal/modal.slice";
import { getStandardName } from "@utils/getStandardName";
import { ButtonFill } from "@styles/styles";
import { Container, StyledNav } from "./NavBar.styles";

const NavBar = () => {
  const { pathname, state } = useLocation();
  const dispatch = useAppDispatch();
  if (pathname === "/404") return null;
  console.log(state);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu(true));
  };
  const toggleCreateNoteModalHandler = () => {
    dispatch(toggleCreateNoteModal(true));
  };
  return (
    <StyledNav>
      <div className="nav__menu">
        <FiMenu onClick={toggleMenuHandler} />
      </div>

      <Container>
        <h2 className="nav__page__title">
          {getStandardName(state ? state : "All notes")}
        </h2>
        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={toggleCreateNoteModalHandler}
            className="nav__btn"
          >
            + 메모 생성
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default NavBar;
