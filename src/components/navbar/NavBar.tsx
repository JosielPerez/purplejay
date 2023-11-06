import React from "react";
import "./style.css";
import Link from "next/link";

function NavBar() {
  const [currentNav, setcurrentNav] = useState<number>(1);

  function handleSelect(navId: number) {
    setcurrentNav(navId);
  }

  return (
    <nav className="sidebar">
      <ul className="list">
        <img src="/circle_dp.jpg" id="nav-bar-im" />
        <li onClick={() => handleSelect(1)}>
          <Link href="dashboard" className={currentNav === 1 ? "active" : ""}>
            Dashboard
          </Link>
        </li>
        <li onClick={() => handleSelect(2)}>
          <Link href="/portfolio" className={currentNav === 2 ? "active" : ""}>
            Portfolio
          </Link>
        </li>
        <li onClick={() => handleSelect(3)}>
          <Link
            href="/achievement"
            className={currentNav === 3 ? "active" : ""}
          >
            Achievement
          </Link>
        </li>
        <li onClick={() => handleSelect(4)}>
          <Link href="/settings" className={currentNav === 4 ? "active" : ""}>
            Settings
          </Link>
        </li>
        <li>
          <Link href="/">Log out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
