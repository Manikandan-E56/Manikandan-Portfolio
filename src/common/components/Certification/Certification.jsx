import { useState } from "react";
import './Certification.css'

const Certificate = ({ image, title, issuer, date }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="certificate-item">
        <img
          src={image}
          alt={title}
          className="certificate-image"
          onClick={handleImageClick}
        />
        <div className="certificate-details">
          <h3>{title}</h3>
          <p>Issued by: {issuer}</p>
          <p>Date: {date}</p>
        </div>
      </div>

      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
          <span className="close-btn">&times;</span>
          <img src={image} alt={title} className="fullscreen-image" />
          <div className="fullscreen-details">
            <h3>{title}</h3>
            <p>Issued by: {issuer}</p>
            <p>Date: {date}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;