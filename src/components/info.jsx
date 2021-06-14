import React, { useEffect, useState } from "react";
import CloudIcon from "@material-ui/icons/Cloud";
import Phone from "./phone";

const Info = () => {
  // js starts here

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Lucknow");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d05de7785966c6013369af8680c06cdc`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main); 
    };

    fetchApi();
  }, [search]);

  // js ends here

  return (
    <>
      <Phone />
      <div className="search-bar">
        <input
          className="searchBar"
          value={search}
          type="search"
          placeholder="Search city"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {!city ? (
        <p className="four-o-four">
          NO DATA FOUND <span className="emoticon">:/</span>
        </p>
      ) : (
        <div className="info">
          <h1 className="info-loc">{search}</h1>
          <p className="info-time">14: 47</p>

          <div className="info-weather-div">
            <div className="weather-right">
              <CloudIcon className="weather-icon" />
              <h3 class="weather-temp">{city.temp}°C</h3>
            </div>

            <div className="weather-left">
              <p className="weather-desc">Clear</p>
            </div>
          </div>

          <div className="other-desc">
            <p className="minmax">
              Min: <span className="values">{city.temp_min}</span>
              <span class="max">
                Max: <span className="values min">{city.temp_max}</span>
              </span>
            </p>
            <p className="humidity">
              Humidity: <span className="values">44</span>
            </p>
            <p className="windspeed">
              Wind Speed: <span className="values speed">20km/ph</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Info;

// api.openweathermap.org/data/2.5/weather?q={city name}&appid=d05de7785966c6013369af8680c06cdc
