import React from 'react'
import './CardComponent.css'

const CardComponent = ({ ticket }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-id">{ticket.id}</div>
        <img 
          src="./src/assets/man.svg" 
          alt="Profile" 
          className="profile-pic" 
        />
      </div>
      <div className="card-title">{ticket.title}</div>
      <div className="card-footer">
        <span className="icon">
          <img
            src="./src/assets/SVG - Urgent Priority grey.svg"
            alt="urgent"
          />
        </span>
        <div className="tag">{ticket.tag[0]}</div>
      </div>
    </div>
  );
};

export default CardComponent
