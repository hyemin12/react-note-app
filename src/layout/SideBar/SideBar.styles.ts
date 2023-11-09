import styled from "styled-components";

export const Container = styled.nav<{ $openMenu: string }>`
  @media screen and (max-width: 950px) {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: 200ms visibility ease-in-out, 250ms background-color ease-in-out;
    visibility: ${({ $openMenu }) =>
      $openMenu === "open" ? "normal" : "hidden"};
    background-color: ${({ $openMenu }) =>
      $openMenu === "open" ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)"};
    cursor: pointer;
  }
`;

export const MainBox = styled.div<{ $openMenu: string }>`
  width: 250px;
  height: 100%;
  min-height: 100vh;
  background-color: #fdefc3;

  @media screen and (max-width: 950px) {
    transition: 350ms transform ease-in-out;
    position: absolute;
    z-index: 10;
    transform: ${({ $openMenu }) =>
      $openMenu === "open" ? "translateX(0%)" : "translateX(-100%)"};
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.3);
  img {
    margin-right: 10px;
  }
  span {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

export const ItemsBox = styled.ul`
  li {
    display: flex;
    align-items: center;
    width: 90%;
    height: 60px;
    border-radius: 0 25px 25px 0;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    transition: 250ms all ease-in-out, 250ms ease-in-out;
    span {
      transition: 250ms all ease-in-out, 250ms ease-in-out;
    }

    &:hover {
      background-color: var(--orange-color);
      span {
        color: #fff !important;
      }
    }
    svg {
      margin-right: 20px;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
    }

    .active-item {
      width: 100%;
      background-color: var(--orange-color);
      border-radius: 0 25px 25px 0;
      color: #fff;
    }
  }

  .sidebar__edit-item {
    padding-left: 20px;
  }
`;
