import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Navbar({ onMenuClick, menuButtonRef }) {
  const [theme, setTheme] = useState(0);

  function changeTheme() {
    if (theme === 1) {
      document.body.classList.toggle("dark-mode");
      setTheme(0);
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.toggle("dark-mode");
      setTheme(1);
      localStorage.setItem("theme", "dark");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      setTheme(1);
    }
  }, []);

  return (
    <>
      <header>
        <div className="nav">
          <div className="nav-left">
            <i
              className="fa-solid fa-bars clickable-icon"
              id="nav-bar"
              onClick={onMenuClick}
              ref={menuButtonRef}
            ></i>
          </div>
          <div className="nav-right">
            <span id="logo">
              <Link to="./Main">GotYou</Link>
            </span>
          </div>
          <div id="theme">
            <i
              className={`fa-solid fa-${
                theme === 1 ? "sun" : "moon"
              } clickable-icon`}
              id="themeBtn"
              onClick={changeTheme}
            ></i>
          </div>
        </div>
      </header>
    </>
  );
}
