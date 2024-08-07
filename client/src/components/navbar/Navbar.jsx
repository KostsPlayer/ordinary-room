import React, { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/new-logo.png";

function Navbar() {
  const location = useLocation();

  const [activedLink, setActivedLink] = useState(location.pathname);

  const handleActivedLink = useCallback(
    (link) => {
      setActivedLink(link);
    },
    [setActivedLink]
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-list">
          <Link
            className={`navbar-list-item ${
              activedLink === "/" ? "active" : ""
            }`}
            to="/"
            onClick={() => handleActivedLink("/")}
          >
            home
          </Link>
          <Link
            className={`navbar-list-item ${
              activedLink === "/klandestin" ? "active" : ""
            }`}
            to="/"
            onClick={() => handleActivedLink("/klandestin")}
          >
            klandestin
          </Link>
          <Link
            className={`navbar-list-item ${
              activedLink === "/asmaraloka" ? "active" : ""
            }`}
            to="/"
            onClick={() => handleActivedLink("/asmaraloka")}
          >
            asmaraloka
          </Link>
          <Link
            className={`navbar-list-item ${
              activedLink === "/diaryku" ? "active" : ""
            }`}
            to="/"
            onClick={() => handleActivedLink("/diaryku")}
          >
            diaryku
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
