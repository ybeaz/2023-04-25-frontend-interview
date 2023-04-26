import React from "react";

export const SearchBlock = (props) => {
  const { handleOnChangeInput = () => {}, inputValue = "" } = props;
  return (
    <div className="SearchBlock">
      <input
        onChange={(event) => handleOnChangeInput(event.target.value)}
        value={inputValue}
      />
    </div>
  );
};
