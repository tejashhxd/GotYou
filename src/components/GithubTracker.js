import { useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/githubTracker.css";

function Input({ inputRef, handleChange, input, handleSubmit }) {
  return (
    <>
      <div className="search-top">
        <div className="search-logo">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="search-title">Track GitHub Activity</div>
      </div>

      <div className="input" ref={inputRef}>
        <div id="inputText">
          Enter a GitHub username to view detailed analytics and progress
        </div>
        <div id="search-box">
          <input
            type="text"
            placeholder="type something..."
            onChange={handleChange}
            value={input}
            id="usernameInput"
          ></input>
          <div className="btnbg">
            <button onClick={handleSubmit} id="inputBtn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Data({ dataRef, user, userIdx, graphData }) {
  return (
    <div ref={dataRef} className="data">
      {userIdx !== null ? <UserData user={user} graphData={graphData} /> : ""}
    </div>
  );
}

function UserData({ user, graphData }) {
  return (
    <>
      <div className="user-profile gihubTracker-card">
        <div id="user-logo">
          <i class="fa-solid fa-user"></i>
        </div>
        <div id="user-name">{user.username}</div>
      </div>

      <div className="graph gihubTracker-card">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={graphData}>
            {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="gihubTracker-card " id="commits">
        <i class="fa-solid fa-code-commit data-icon"></i> Commits:{" "}
        {user.commits}
      </div>
      <div className="gihubTracker-card " id="activeDays">
        <i class="fa-solid fa-users data-icon"></i> Followers: {user.followers}
      </div>
      <div className="gihubTracker-card " id="repository">
        <i class="fa-solid fa-book data-icon"></i> Repository: {user.repository}
      </div>
    </>
  );
}

export default function GithubTracker() {
  const [userData, setuserData] = useState(null);
  const [input, setinput] = useState("");
  const [userIdx, setuserIdx] = useState(null);
  const [graphData, setgraphData] = useState([]);
  const dataRef = useRef(null);
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  const handleSubmit = async () => {
    if (!input.trim()) {
      alert("please enter a username");
      return;
    }
    try {
      const response = await fetch(
        `https://api.github.com/users/${input.trim()}`
      );
      if (!response.ok) {
        throw new Error("user not found");
      }
      const data = await response.json();
      const repo = await fetch(
        `https://api.github.com/users/${input.trim()}/repos`
      );
      const repoData = await repo.json();
      let commitCount = 0;
      const dateMap = {};
      for (let i of repoData) {
        const commit = await fetch(
          `https://api.github.com/repos/${input.trim()}/${i.name}/commits`
        );
        if (commit.ok) {
          const commitData = await commit.json();
          for (let i of commitData) {
            const date = i.commit.author.date.split("T")[0];
            if (dateMap[date]) {
              dateMap[date]++;
            } else {
              dateMap[date] = 1;
            }
            commitCount++;
          }
        } else {
          console.warn(
            `failed to fetch commit for ${i.name}: ${commit.status}`
          );
        }
      }
      const graphData = Object.keys(dateMap).map((date) => ({
        date,
        count: dateMap[date],
      }));

      setgraphData(graphData);

      setuserData({
        username: data.login,
        commits: commitCount, // GitHub API doesn’t give commit count directly
        followers: data.followers, // Also not directly available
        repository: data.public_repos,
      });
      setuserIdx(0);
    } catch (error) {
      alert("user not found");
      setuserIdx(null);
    }
  };

  return (
    <>
      <main id="githubMain">
        {userIdx === null ? (
          <Input
            inputRef={inputRef}
            handleChange={handleChange}
            input={input}
            handleSubmit={handleSubmit}
          />
        ) : (
          <Data
            dataRef={dataRef}
            user={userData}
            userIdx={userIdx}
            graphData={graphData}
          />
        )}
      </main>
    </>
  );
}
