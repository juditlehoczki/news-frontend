import React from "react";
import moment from "moment";
import { Link } from "@reach/router";

import Login from "./Login";

import S from "./StyledComponents";

const Header = (props) => {
  const {
    userLoggedIn,
    setUserLoggedIn,
    themeSwitchButton,
    switchTheme,
  } = props;
  return (
    <>
      <S.Header to="/">
        <h1>❥The Daily News</h1>
        <h2>Brought To You By ▸ Press JL</h2>
      </S.Header>
      <S.SubHeader>
        <span>
          <button className="switch" onClick={switchTheme}>
            <img src={themeSwitchButton} alt="light switch" height="25" />
          </button>{" "}
          {/* {userLoggedIn && <Link to="/articles/new">Write An Article</Link>} */}
        </span>
        <span>{moment().format("dddd Do MMMM YYYY")}</span>
        <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </S.SubHeader>
    </>
  );
};

export default Header;
