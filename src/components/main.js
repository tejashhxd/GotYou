import "../styles/main.css";

export default function main() {
  return (
    <>
      <main>
        <div id="headline">
          <h2>Start Tracking Your Progress And Hobbies</h2>
          <br />
          <a href="#" id="openLink">
            <p>
              Lets Get Started{" "}
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </p>
          </a>
        </div>

        <div className="content-card" id="card1">
          <div className="content-head">
            <a href="#" className="content-head-text">
              <b>Plan Your Day</b>
            </a>
          </div>
          <div className="content-body">
            <div className="content-image">
              <a href="#" className="content-image-text">
                <i className="fa-solid fa-layer-group"></i>
              </a>
            </div>
            <div>
              <a href="#" className="content-body-text">
                <p>
                  Stay productive and focused. Start organizing your day in
                  seconds.
                </p>
              </a>
              <p className="contentLink">
                <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="content-card" id="card2">
          <div className="content-head">
            <a href="#" className="content-head-text">
              <b>Track Github Progress</b>
            </a>
          </div>
          <div className="content-body">
            <div className="content-image">
              <a href="#" className="content-image-text">
                <i className="fa-solid fa-code-branch"></i>
              </a>
            </div>
            <div>
              <a href="#" className="content-body-text">
                <p> See your open-source journey in beautiful graphs.</p>
              </a>
              <p className="contentLink">
                <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="content-card" id="card3">
          <div className="content-head">
            <a href="#" className="content-head-text">
              <b>Grow Your Coding Skills</b>
            </a>
          </div>
          <div className="content-body">
            <div className="content-image">
              <a href="#" className="content-image-text">
                <i className="fa-solid fa-code"></i>
              </a>
            </div>
            <div>
              <a href="#" className="content-body-text">
                <p>Track solved problems, rank shifts, and daily streaks.</p>
              </a>
              <p className="contentLink">
                <i className="fa-solid fa-arrow-right-long"></i>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
