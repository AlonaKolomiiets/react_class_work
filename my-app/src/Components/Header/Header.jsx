import React from "react";
// import "./Header.css";

const styles = {
  minHeight: "60px",
  backgroundColor: "#000",
  color: "#fff",
  fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
  fontSize: "20px",
};

const Header = () => {
  return (
    <header style={styles}>
      {/* className="header"> */}
      <h1>Shop Header</h1>
    </header>
  );
};

export default Header;
