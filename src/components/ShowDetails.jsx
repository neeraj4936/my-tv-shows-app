// src/components/ShowDetails.js
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ShowDetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  // Function to handle booking movie ticket
  const handleBookTicket = () => {
    // Implement booking logic here
  };

  return (
    <div className="container">
      <h1 className="show-details-title">Show Details</h1>
      <div className="show-details-card">
        <h2>{showDetails.name}</h2>
        <p className="show-details-summary">{showDetails.summary}</p>
        <button className="book-ticket-button" onClick={handleBookTicket}>
          Book Movie Ticket
        </button>
        <Link to="/" className="back-to-list-link">
          Back to Show List
        </Link>
      </div>
    </div>
  );
};

export default ShowDetails;
