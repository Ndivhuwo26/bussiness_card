import React, { useState } from "react";
import "./BusinessCard.css";

const BusinessCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`business-card ${darkMode ? "dark-mode" : ""}`}>
      {/* Business Logo */}
      <div className="logo-container">
        <img src="/lc%201.PNG" alt="Business Logo" className="business-logo" />
      </div>

      <h1>H&N</h1>
     <p>TRANSPORT SOLUTIONS</p>

      {/* Dark Mode Toggle with Icons */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <i className="fas fa-sun"></i> // Sun Icon for Light Mode
        ) : (
          <i className="fas fa-moon"></i> // Moon Icon for Dark Mode
        )}
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>

      {/* Show Details Toggle */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Email: sabimaruDevo@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Website: sabimaruDevo.dev</p>

          {/* Show Map Toggle */}
          <button onClick={() => setShowMap(!showMap)}>
            {showMap ? "Hide Location" : "View Location"}
          </button>

          {/* Map */}
          {showMap && (
            <iframe
              title="Business Location"
              className={`map ${showMap ? "show" : ""}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6030.325463352992!2d28.102090880458295!3d-26.01218290940396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95720166da29c1%3A0xba979fc3dadabd1!2sIncredible%20Connection%20Mall%20of%20Africa!5e0!3m2!1sen!2sza!4v1742286665009!5m2!1sen!2sza"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      )}
    </div>
  );
};

export default BusinessCard;
