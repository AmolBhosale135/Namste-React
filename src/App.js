import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png"
        alt="Logo"
      />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
