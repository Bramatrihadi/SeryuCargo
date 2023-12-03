import { useState, useEffect } from "react";
import AuthComponent from "../auth/AuthComponent";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // eslint-disable-next-line no-undef
    localStorage.setItem("isLoggedIn", "true"); // Store login status in localStorage
    closeLoginPopup();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // eslint-disable-next-line no-undef
    localStorage.removeItem("isLoggedIn"); // Remove login status from localStorage
  };

  const navigateToHomepage = () => {
    navigate("/");
  }

  const navigateToFavorite = () => {
    navigate("/favorite");
  };

  const navigateToWatchlist = () => {
    navigate("/watchlist");
  };
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 font-roboto font-normal">
            <li>
              <a onClick={isLoggedIn ? navigateToFavorite : openLoginPopup}>Favorite</a>
            </li>
            <li>
              <a onClick={isLoggedIn ? navigateToWatchlist : openLoginPopup}>Watchlist</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost xl:text-4xl lg:text-xl md:text-md sm:text-sm font-poppins"
          style={{ letterSpacing: "1rem", fontWeight: "900" }} onClick={navigateToHomepage}
        >
          CINEMA
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal font-roboto font-normal text-xl">
          <li>
            <a onClick={isLoggedIn ? navigateToFavorite : openLoginPopup}>Favorite</a>
          </li>
          <li>
            <a onClick={isLoggedIn ? navigateToWatchlist : openLoginPopup}>Watchlist</a>
          </li>
        </ul>
      </div>
      {/* Conditionally render Logout button when logged in */}
      {isLoggedIn && (
        <li>
          <button onClick={handleLogout} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
        </li>
      )}

      {/* Modal-like popup */}
      {showLoginPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md">
            <AuthComponent
              closeLoginPopup={closeLoginPopup} 
              onLogin={handleLogin} 
              onLogout={handleLogout}
            />
            <button onClick={closeLoginPopup} className="mt-4 btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
