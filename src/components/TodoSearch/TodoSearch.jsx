import React from "react";
import { TodoContext } from "../TodoContext/TodoContext.jsx";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <>
      <input
        type="search"
        name=""
        id=""
        placeholder="Cubrir a Juan..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
