import React from "react";

export default function Search({ handleInput, search }) {
  return (
    <section className="searchbox-wrap">
      <input
        onChange={handleInput}
        type="text"
        placeholder="Search for a movie..."
        className="searchbox"
        onKeyPress={search}
      />
    </section>
  );
}
