import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Search from "./components/Search/Search";

function App() {
  let [fetchData, updateFetchData] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let { info, results } = fetchData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
      console.log(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
