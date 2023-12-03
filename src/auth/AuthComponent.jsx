/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from "prop-types";
import { getRequestToken, getAccessToken } from "../apis/api";

const webHost = import.meta.env.VITE_APP_WEBHOST;
const token = import.meta.env.VITE_APP_TOKEN;

const AuthComponent = ({ closeLoginPopup, onLogin, onLogout }) => {
  const [requestToken, setRequestToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [accountId, setAccountId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getRequestTokenHandler = async () => {
    try {
      const response = await getRequestToken(`${token}`);

      if (response.success) {
        setRequestToken(response.request_token);

        // eslint-disable-next-line no-undef
        window.open(
          `${webHost}/auth/access?request_token=${response.request_token}`
        );
      }
    } catch (error) {
      // Handle error if needed
      console.error(error);
    }
  };

  const getAccessTokenHandler = async () => {
    try {
      const response = await getAccessToken(`${token}`, requestToken);

      if (response.access_token) {
        setAccessToken(response.access_token);
        setAccountId(response.account_id);
        setIsLoggedIn(true);

        // Close the modal when logged in
        closeLoginPopup();

        onLogin(true);
      }
    } catch (error) {
      // Handle error if needed
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className="mr-5 btn btn-primary"
          onClick={getRequestTokenHandler}
        >
          Request Token
        </button>
        <button
          className="btn btn-primary"
          onClick={getAccessTokenHandler}
          disabled={!requestToken}
        >
          Login
        </button>
      </div>
    </div>
  );
};

// Add prop types validation
AuthComponent.propTypes = {
  closeLoginPopup: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default AuthComponent;
