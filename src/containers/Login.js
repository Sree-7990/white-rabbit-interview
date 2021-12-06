import React, { useState } from "react";
import userData from "../data/userData";
import { withRouter} from 'react-router-dom';

const Login = ({ history }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const userLogin = () => {
    history.push('/users');
    if(userData?.some(user => user?.userId === userId && user?.password === password)) {
        setLoginError(false);
        history.push('/users');
    } else {
        setLoginError(true);
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <div className="form">
        <div className="input-field">
          <input
            value={userId}
            placeholder="user id"
            onChange={(event) => setUserId(event?.target?.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(event) => setPassword(event?.target?.value)}
          />
        </div>
        {loginError && (
            <div>invalid credentials !!! enter again...</div>
        )}
      </div>
      <div className="button" onClick={userLogin}>
        Login
      </div>
    </div>
  );
};

export default withRouter(Login);
