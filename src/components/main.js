import "../styles/main.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function main() {
  return (
    <>
      <main id="HomepageMain">
        <div id="headline">
          <h2>Start Tracking Your Progress And Hobbies</h2>
          <br />
          <p>
            <Link to="./Dashboard" id="openLink">
              Lets Get Started{" "}
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </Link>
          </p>
        </div>

        <div className="content-card" id="card1">
          <Link to="/Planner">
            <div className="content-head">
              <b className="content-head-text">Plan Your Day</b>
            </div>
            <div className="content-body">
              <div className="content-image">
                <i className="fa-solid fa-layer-group content-image-text"></i>
              </div>
              <div>
                <p className="content-body-text">
                  Stay productive and focused. Start organizing your day in
                  seconds.
                </p>
                <p className="contentLink">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="content-card" id="card2">
          <Link to="/GithubTracker">
            <div className="content-head">
              <b className="content-head-text">Track Github Progress</b>
            </div>
            <div className="content-body">
              <div className="content-image">
                <i className="fa-solid fa-code-branch content-image-text"></i>
              </div>
              <div>
                <p className="content-body-text">
                  See your open-source journey in beautiful graphs.
                </p>
                <p className="contentLink">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="content-card" id="card3">
          <Link to="/LeetcodeTracker">
            <div className="content-head">
              <b className="content-head-text">Grow Your Coding Skills</b>
            </div>
            <div className="content-body">
              <div className="content-image">
                <i className="fa-solid fa-code content-image-text"></i>
              </div>
              <div>
                <p className="content-body-text">
                  Track solved problems, rank shifts, and daily streaks.
                </p>
                <p className="contentLink">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
