import React, { useState } from "react";
import Search from "./components/Search";
import Axios from "axios";
import Results from "./components/Results";
import Popup from "./Popup";

function App() {
  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {},
    error: "",
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=72512453";

  const search = (e) => {
    if (e.key == "Enter" && state.s != "") {
      Axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
       if (results == undefined){
        setstate((prevState) => {
          return { ...prevState, error: "Your Search "+state.s+" Result Not Found. Plese Enter A Valid Movie Name..." };
        });
       }else{
        setstate((prevState) => {
          return { ...prevState, results: results, error: "" };
        });
      }
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;
    setstate((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopup = (id) => {
    Axios("http://www.omdbapi.com/?plot=full&i=" + id + "&apikey=72512453").then(
      ({ data }) => {
        let result = data;
        setstate((prevState) => {
          return { ...prevState, selected: result };
        });
      }
    );
  };

  const closePopup = () => {
    setstate((prevState) => {
      return { ...prevState, selected: {} };
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search search={search} handleInput={handleInput} />
        <p className="red-text text-center font-weight-bold">{state.error}</p>
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title !== "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
