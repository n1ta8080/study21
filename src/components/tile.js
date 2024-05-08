import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Services/tile.scss"


const Tile = ({ link, imgSrc, altImg, title, description, bold }) => {
  return (
    <article>
      <Link className="link" to={link} target='blank'>
        <div classaName="icon">
          <img src={imgSrc} alt={altImg} />
        </div>
        <div className="about">
          <h4>{title} <span>{bold}</span> </h4>
          <p>{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Tile;