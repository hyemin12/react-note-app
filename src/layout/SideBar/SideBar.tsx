import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { v4 } from "uuid";
import { FaTag, FaLightbulb, FaArchive, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { toggleMenu } from "@store/menu/menu.slice";
import { toggleTagsModal } from "@store/modal/modal.slice";
import { getStandardName } from "@utils/getStandardName";
import SideBarItem from "./SideBarItem";
import { Container, ItemsBox, MainBox, StyledLogo } from "./SideBar.styles";

const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <FaTrash />, title: "Trash", id: v4() },
];

const SideBar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.menu);
  const { tagsList } = useAppSelector((state) => state.tags);

  if (pathname === "/404") return null;

  return (
    <Container openMenu={isOpen ? "open" : ""}>
      <MainBox openMenu={isOpen ? "open" : ""}>
        <StyledLogo>
          <h1>Keep</h1>
        </StyledLogo>

        <ItemsBox>
          {/* note Item */}
          <SideBarItem
            path={"/"}
            onClick={() => dispatch(toggleMenu(false))}
            state={"notes"}
            icon={<FaLightbulb />}
            name={"Notes"}
          />

          {/* Tag Item */}
          {tagsList?.map(({ tag, id }) => (
            <SideBarItem
              key={id}
              path={`/tag/${tag}`}
              onClick={() => dispatch(toggleMenu(false))}
              state={tag}
              icon={<FaTag />}
              name={getStandardName(tag)}
            />
          ))}

          {/* Edit Tag Item */}
          <li
            className="sidebar__edit-item"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "edit", view: true }))
            }
          >
            <span>
              <MdEdit />
            </span>
            <span>{getStandardName("Edit Notes")}</span>
          </li>

          {/* other Items */}
          {items.map(({ icon, title, id }) => (
            <SideBarItem
              key={id}
              path={`/${title.toLocaleLowerCase()}`}
              onClick={() => dispatch(toggleMenu(false))}
              state={title}
              icon={icon}
              name={title}
            />
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

export default SideBar;
