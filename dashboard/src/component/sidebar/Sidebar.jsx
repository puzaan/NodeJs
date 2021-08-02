import React from "react";
import { LineStyle } from "@material-ui/icons";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/usersform" className="link">
              <li className="sidebarListItem">
                <SpeakerNotesIcon className="sidebarIcon" />
                Form List
              </li>
            </Link>
            <Link to='/users' className="link">
            <li className="sidebarListItem">
              <AccountCircleIcon className="sidebarIcon" />
              Users
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
