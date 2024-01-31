// src/components/ShowList.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ShowList.css";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="container">
      <h1>Show List</h1>
      {shows.map((show) => (
        <div key={show.show.id} className="show-card">
          <h3 className="show-title">{show.show.name}</h3>
          <Link to={`/show/${show.show.id}`}>
            <button className="show-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
