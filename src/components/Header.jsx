import React from "react";
import moment from "moment";

import Login from "./Login";

import S from "./StyledComponents";

const Header = props => {
  const {
    userLoggedIn,
    setUserLoggedIn,
    themeSwitchButton,
    switchTheme
  } = props;
  return (
    <>
      <S.Header to="/">
        <span>
          Light Switch
          <br />
          <button className="switch" onClick={switchTheme}>
            {themeSwitchButton}
          </button>
        </span>
        <h1>❥The Daily News</h1>
        <h2>Brought To You By ▸ Press JL</h2>
      </S.Header>
      <S.SubHeader>
        <span>VOL. I. No. 1.</span>
        <span>{moment().format("dddd Do MMMM YYYY")}</span>
        <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </S.SubHeader>
    </>
  );
};

export default Header;
