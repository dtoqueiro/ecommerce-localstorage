import React from "react";
import styled from "styled-components";

type Props = {
  title?: string;
};

export const Navbar: React.FC<Props> = ({ title, children }) => {
  return (
    <Nav>
      <h1>{children}</h1>
      <h2>{title}</h2>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.23);
`;
