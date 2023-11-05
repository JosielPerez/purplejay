"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import LogOut from "../logout";

function NavBar() {
  return (
    <nav className="sidebar">
      <ul className="list">
        <img src="/circle_dp.jpg" id="nav-bar-im" />
        <li>
          <Link href="dashboard" className="active">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/achievement">Achievement</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
