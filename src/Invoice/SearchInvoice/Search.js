import React from "react";

const Search = (props) => {

  return (
    <>
      <div class="form-group">
        <input
          type="text"
          class="form-control mt-2"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search"
        />
        <small id="emailHelp" class="form-text text-muted">
          Type in to search the name.
        </small>
      </div>
    </>
  );
};

export default Search;
