import "../styles/navbar.css";
export default function navbar({ onMenuClick, menuButtonRef }) {
  let theme = 1;

  function changeTheme() {
    if (theme === 1) {
      document.body.classList.toggle("dark-mode");
      document.getElementById("themeBtn").classList.remove("fa-moon");
      document.getElementById("themeBtn").classList.add("fa-sun");
      theme = 0;
    } else {
      document.body.classList.toggle("dark-mode");
      document.getElementById("themeBtn").classList.remove("fa-sun");
      document.getElementById("themeBtn").classList.add("fa-moon");
      theme = 1;
    }
  }

  return (
    <>
      <header>
        <div className="nav">
          <div className="nav-left">
            <i
              className="fa-solid fa-bars"
              id="nav-bar"
              onClick={onMenuClick}
              ref={menuButtonRef}
            ></i>
          </div>
          <div className="nav-right" id="logo">
            <a>GotYou</a>
          </div>
          <div id="theme">
            <i
              className="fa-solid fa-sun"
              id="themeBtn"
              onClick={changeTheme}
            ></i>
          </div>
        </div>
      </header>
    </>
  );
}
