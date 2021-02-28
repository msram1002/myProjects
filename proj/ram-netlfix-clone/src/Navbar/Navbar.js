import React, {useState, useEffect} from 'react'
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        handleShow(true);
      } else handleShow(false);
    })
  });

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img className="navbar__logo" 
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
        alt="netflix logo" />

        <img className="navbar__avatar" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="netflixavatar"/>
    </div>
  )
}

export default Navbar;
