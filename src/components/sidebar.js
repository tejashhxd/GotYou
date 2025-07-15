import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import React from "react";
import { useRef, useEffect } from "react";

export default function Sidebar({ isOpen, closeSidebar, menuButtonRef }) {
  const SidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        SidebarRef.current &&
        !SidebarRef.current.contains(e.target) &&
        !menuButtonRef.current.contains(e.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const page = [
    { lable: "Home", path: "/Main" },
    { lable: "Dashboard", path: "/Dashboard" },
    { lable: "Github Tracker", path: "/GithubTracker" },
    { lable: "Leetcode Tracker", path: "/LeetcodeTracker" },
    { lable: "Planner", path: "/Planner" },
  ];

  return (
    <>
      <div
        id="sidebar"
        className={`sidebar ${isOpen ? "active" : ""}`}
        ref={SidebarRef}
      >
        <div className="user-info">
          <div id="userPfp"></div>
          <div id="userDetails">
            <p id="username">Tejash Kumar</p>
          </div>
        </div>
        <ul>
          {page.map(({ lable, path }) => (
            <li key={path}>
              <Link to={path}>{lable}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
