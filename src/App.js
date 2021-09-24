import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
import { getURL } from "./helpers";
function App() {
  const initialState = {
    city: "",
    country: "",
  };
  const [search, setSearch] = useState(initialState);
  const [query, setQuery] = useState(false);
  const [fetchedData, setFetchedData] = useState({});
  const [error, setError] = useState(false);
  const { city, country } = search;

  useEffect(() => {
    if (query) {
      const fetchAPI = async () => {
        const URL = getURL({ city, country });
        const response = await fetch(URL);
        const data = await response.json();
        setQuery(false);
        setError(false);
        if (data.cod === "404") {
          return setError(true);
        }
        return setFetchedData(data);
      };
      fetchAPI();
    }
  }, [query, city, country]);
  let component = !error ? (
    <Weather fetchedData={fetchedData} />
  ) : (
    <Error title="Ciudad no encontrada" styleClass="error" />
  );
  return (
    <>
      <Header title="Weather App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
