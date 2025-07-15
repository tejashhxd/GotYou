import "H:\\codes\\react\\gotyou-react\\src\\styles\\sidebar.css"
import { useState, useRef, useEffect } from "react";

export default function sidebar() {

  return (
    <>
      <div id="sidebar" className="sidebar">
        <div className="user-info">
          <div id="userPfp"></div>
          <div id="userDetails">
            <p id="username">Tejash Kumar</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="user/">User</a>
          </li>
          <li>
            <a href="dashboard/">Dashboard</a>
          </li>
          <li>
            <a href="GitHub-Tracker/">GitHub Tracker</a>
          </li>
          <li>
            <a href="Leetcode-Tracker/">LeetCode Tracker</a>
          </li>
          <li>
            <a href="planner/">Planner</a>
          </li>
        </ul>
      </div>
    </>
  );
}
