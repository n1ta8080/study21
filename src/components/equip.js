import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../styles/Equip/equip.scss"

const Equip = ({ link, srcEquip, altEquip, number }) => {
    // js event for hover effect
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className="equip">
      <Link to={link}>
        <img
          src={srcEquip}
          alt={altEquip}
          data-number={number}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={isHovered ? 'blurred' : ''}
        />
        {isHovered && <div className="equip-number">{altEquip} {number}</div>}
      </Link>
    </div>
  )
}

export default Equip