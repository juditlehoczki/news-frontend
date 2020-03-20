import React from "react";

import S from "./StyledComponents";

const Footer = () => {
  return (
    <S.Footer>
      Created by{" "}
      <a href="https://github.com/juditlehoczki" target="_blank">
        Judit Lehoczki
      </a>{" "}
      for the Frontend Block Review of{" "}
      <a href="https://northcoders.com/developer-pathway" target="_blank">
        Developers Pathway
      </a>{" "}
      at{" "}
      <a href="https://northcoders.com/" target="_blank">
        Northcoders
      </a>
      .
    </S.Footer>
  );
};

export default Footer;
