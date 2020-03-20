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
    <div>
      <S.HeaderContainer to="/">
        <S.HeaderTitle>❥The Daily News</S.HeaderTitle>
        <S.HeaderSubtitle>Brought To You By ▸ Press JL</S.HeaderSubtitle>
      </S.HeaderContainer>
      <S.HeaderDetails>
        <span>
          Light Switch
          <br />
          <button onClick={switchTheme}>{themeSwitchButton}</button>
        </span>
        <span>VOL. I. No. 1.</span>
        <span>{moment().format("dddd Do MMMM YYYY")}</span>
        <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </S.HeaderDetails>
    </div>
  );
};

export default Header;
