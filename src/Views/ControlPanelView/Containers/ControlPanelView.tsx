import React from "react";
import LoginView from "../../LoginView/LoginView"; // Make sure to import LoginView

const ControlPanelView: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <LoginView />;
  }

  console.log("Dev");
  return (
    <div className="pt-5">
      <div className="pt-3 pb-3 border shadow">
        <h1>Control Panel View</h1>
        <button className="btn btn-success">+Blog Post</button>
        {/* Rest of your ControlPanelView */}
      </div>
    </div>
  );
};

export default ControlPanelView;
