import React from "react";

function Popup({ selected, closePopup }) {
  console.log(selected);

  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title}
          <span> ({selected.Year})</span>
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <h5><b className="font-weight-bold yellow-text mb-3">Actors : </b> {selected.Actors}</h5>
        <h5><b className="font-weight-bold yellow-text mb-3">Released : </b> {selected.Released}</h5>
        <h5><b className="font-weight-bold yellow-text mb-3">Country : </b> {selected.Country}</h5>
        <h5><b className="font-weight-bold yellow-text mb-3">Language : </b> {selected.Language}</h5>
        <h5><b className="font-weight-bold yellow-text mb-3">Awards : </b> {selected.Awards}</h5>
        <h5><b className="font-weight-bold yellow-text mb-3">Runtime : </b> {selected.Runtime}</h5>
        <br/>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        <div className="d-flex flex-row justify-content-between">
        <button className="close btn-danger p-2 " onClick={closePopup}>
          Close
        </button>
        <a target="blank" href={"https://www.imdb.com/title/"+selected.imdbID}><button className="close btn-warning p-2">
          Visite Site
        </button></a>
        </div>
      </div>
    </section>
  );
}

export default Popup;
