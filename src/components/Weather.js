import React from "react";
import PropTypes from "prop-types";
import { KelvinToCentigrade } from "../helpers";
const Weather = ({ fetchedData }) => {
  if (Object.keys(fetchedData).length === 0) return null;
  const {
    name,
    main: { temp, temp_min, temp_max },
  } = fetchedData;

  const tempRegular = KelvinToCentigrade(temp);
  const tempMax = KelvinToCentigrade(temp_max);
  const tempMin = KelvinToCentigrade(temp_min);
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {tempRegular} <span>&#x2103;</span>
        </p>
        <p>
          La temperatura minima es {tempMin} <span>&#x2103;</span>
        </p>
        <p>
          La temperatura máxima es {tempMax} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Weather.propTypes = {
  fetchedData: PropTypes.object.isRequired,
};
export default Weather;
