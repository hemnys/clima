import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
const Form = ({ search, setSearch, setQuery }) => {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const validateData = (search) => {
    for (let key of Object.keys(search)) {
      if (search[key].trim() === "") {
        setError(true);
        return false;
      }
    }
    setError(false);
    setQuery(true);
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData(search)) {
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error title="Campos Obligatorios" styleClass="error" /> : null}
      <div className="input-field col s12">
        <input type="text" name="city" id="city" onChange={handleChange} />
        <label htmlFor="city">City:</label>
      </div>
      <div className="input-field col s12">
        <select name="country" onChange={handleChange}>
          <option value="">--Select Country--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country:</label>
      </div>
      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-ligth btn-large btn-block yellow accent-4"
        >
          Search
        </button>
      </div>
    </form>
  );
};
Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};
export default Form;
