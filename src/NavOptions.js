import React from 'react'
import "./NavOptions.css";

function NavOptions({ active, text, Icon }) {
  return (
    <div className={`navOptions ${active && 'navOptions--active'}`}>
        <h2>{text}</h2>
        <Icon className="svg" />
        
        
    </div>
  )
}

export default NavOptions