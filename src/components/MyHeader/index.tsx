import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import CartImg from "../CartImg";
import PersonImg from "../PersonImg";
import { Link } from "react-router-dom";
import HomeImg from "../HomeImg";

type Props = {
  title?: string;
  items?: number;
};

const MyHeader: React.FC<Props> = ({ title, items }) => {
  return (
    <Header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
          <div className="homeImg">
            <Link to="/">
              <HomeImg />
            </Link>
          </div>
        </div>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="info">
          <div className="cartImg">
            <Link to="/cart">
              <CartImg />
            </Link>
            <span>{items || 0}</span>
          </div>
          <div className="personImg">
            <Link to="/person">
              <PersonImg />
            </Link>
          </div>
        </div>
      </div>
    </Header>
  );
};

const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.23);
  color: #fff;

  .container {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 1.5rem;
      }
    }

    .logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .homeImg {
        padding: 0 2rem;
      }
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .cartImg {
        padding: 0 2rem;
        position: relative;

        span {
          background-color: red;
          padding: 0.1rem 0.3rem;
          border-radius: 8px;
          position: absolute;
          top: 0;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default MyHeader;
