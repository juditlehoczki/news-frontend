import React from "react";

import S from "./StyledComponents";

const Footer = () => {
  return (
    <S.Footer>
      Created by{" "}
      <a
        href="https://github.com/juditlehoczki"
        target="_blank"
        rel="noopener noreferrer"
      >
        Judit Lehoczki
      </a>{" "}
      for the Frontend Block Review of{" "}
      <a
        href="https://northcoders.com/developer-pathway"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developers Pathway
      </a>{" "}
      at{" "}
      <a href="https://northcoders.com/" target="_blank" rel="noopener">
        Northcoders
      </a>
      .
    </S.Footer>
  );
};

export default Footer;
