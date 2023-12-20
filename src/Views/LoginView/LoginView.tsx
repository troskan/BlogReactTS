import React, { useState } from "react";

interface LoginResponse {
  token: string;
}

const LoginView: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data: LoginResponse = await response.json();
      localStorage.setItem("token", data.token);
    } catch (error: any) {
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
