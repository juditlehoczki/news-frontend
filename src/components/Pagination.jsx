import React from "react";

import S from "./StyledComponents";

const Pagination = props => {
  return (
    <S.Pagination>
      <button
        disabled={props.p === 1}
        onClick={() => {
          props.changePage(-1);
        }}
      >
        {"<"}
      </button>{" "}
      {props.p} / {Math.ceil(props.total_count / 10)}{" "}
      <button
        disabled={props.p === Math.ceil(props.total_count / 10)}
        onClick={() => {
          props.changePage(1);
        }}
      >
        {">"}
      </button>
    </S.Pagination>
  );
};

export default Pagination;
