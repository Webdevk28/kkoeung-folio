import React, { useState } from 'react';
import '../App.css';

const illustrations = {
  medal: {
    heading: 'Good job!',
    button1: 'Cancel',
    button2: 'Great!',
    img: (
      <div className="medal">
        <div className="medal-ribbon-shadow" />
        <div className="medal-ribbon" />
        <div className="medal-body">
          <div className="face">
            <div className="eye-left" />
            <div className="eye-right" />
            <div className="mouth" />
          </div>
        </div>
        <div className="medal-star" />
      </div>
    )
  },
  mail: {
    heading: 'Check your inbox!',
    button1: 'Close',
    button2: 'Open Mail',
    img: (
      <div className="mail">
        <div className="envelope" />
        <div className="letter" />
      </div>
    )
  },
  gmail: {
    heading: 'Check your inbox!',
    button1: 'Closessss',
    button2: 'Open Mailllll',
    img: (
      <div className="mail">
        <div className="envelope" />
        <div className="letter" />
      </div>
    )
  }
};

export default function App() {
  const [popupType, setPopupType] = useState(null);

  const handleOpen = (type) => {
    setPopupType(type);
  };

  const handleClose = () => {
    setPopupType(null);
  };

  const data = popupType ? illustrations[popupType] : null;

  return (
    <>
      <div className="buttons">
        {Object.keys(illustrations).map((key, index) => (
          <button key={index} onClick={() => handleOpen(key)}>
            Show {key.charAt(0).toUpperCase() + key.slice(1)} Popup
          </button>
        ))}
      </div>

      {data && (
        <div className="popup" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-close" onClick={handleClose}>&times;</div>
            <div className="popup-header">{data.img}</div>
            <div className="popup-text">
              <h1>{data.heading}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <button onClick={handleClose}>{data.button1}</button>
              <button>{data.button2}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
