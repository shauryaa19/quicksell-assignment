import React, { useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard';
import './Header.css'; // Import the new CSS file

const Header = ({ setGroupingOption, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeDisplay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="display-button" onClick={activeDisplay}>
        <img src="/assets/Display.svg" alt="display" />
        <div className="display-text">Display</div>
        <img src="/assets/down.svg" alt="display" className="display-icon" />
      </div>

      {isOpen && (
        <div className="display-card-container">
          <DisplayCard setGroupingOption={setGroupingOption} setSortOption={setSortOption} />
        </div>
      )}
    </div>
  );
};

export default Header;
