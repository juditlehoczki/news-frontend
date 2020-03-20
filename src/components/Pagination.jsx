import React from "react";

const Pagination = props => {
  return (
    <div>
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
    </div>
  );
};

export default Pagination;
