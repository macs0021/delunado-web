import React from 'react';
import './Card.css';

const Card = ({image, category, title, description, url}) => {
  return (
    <a className="post-module" href={url} target="_blank" rel="noopener noreferrer">
      <div className="thumbnail">
        <img src={image} alt="Post"/>
      </div>
      <div className="post-content">
        <div className="category">{category}</div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </a>
  );
};

export default Card;