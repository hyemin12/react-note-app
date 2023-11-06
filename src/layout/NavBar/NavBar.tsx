import React from "react";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useAppDispatch } from "@hooks/redux";
import { toggleMenu } from "@store/menu/menu.slice";
import { toggleCreateNoteModal } from "@store/modal/modal.slice";
import { ButtonFill } from "@styles/styles";
import { Container, StyledNav } from "./NavBar.styles";
import { getStandardName } from "@/utils/getStandardName";

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
        <div className="nav__page__title">{getStandardName(state)}</div>
        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={toggleCreateNoteModalHandler}
            className="nav__btn"
          >
            +
          </ButtonFill>
        )}
      </Container>
    </StyledNav>
  );
};

export default NavBar;
