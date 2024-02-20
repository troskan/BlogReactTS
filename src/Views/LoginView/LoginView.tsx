import React, { useState, useContext } from "react";
import ControlPanelView from "../ControlPanelView/Containers/ControlPanelView";
import AuthenticationContext from "../../Contexts/AuthenticationContext";

interface LoginResponse {
  token: string;
}

const LoginView: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setIsLoggedIn } = useContext(AuthenticationContext);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://blog-backend-dmn0.onrender.com/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password, email }),
        }
      );

      if (!response.ok) {
        setIsLoggedIn(false);
        throw new Error("Login failed!");
      } else if (response.ok) {
        setIsLoggedIn(true);
        return <ControlPanelView />;
      }
    } catch (error: any) {
      setIsLoggedIn(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <form className="border rounded-2 p-4" onSubmit={handleLogin}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default LoginView;
