import React from "react";
import { NavLink } from "react-router-dom";

interface SideBarItemProps {
  onClick: () => void;
  path: string;
  state: string;
  icon: JSX.Element;
  name: string;
}

const SideBarItem = ({
  onClick,
  path,
  state,
  icon,
  name,
}: SideBarItemProps) => {
  return (
    <li onClick={onClick}>
      <NavLink
        to={path}
        state={state}
        className={({ isActive }) =>
          isActive ? "active-item" : "inactive-item"
        }
      >
        <span>{icon}</span>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

export default SideBarItem;
