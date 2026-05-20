import React, { useContext } from "react";

import { ThemeContext } from "../context/Themecontext";

const Toggletheme = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">

      <h2>Theme Controller</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

    </div>
  );
};

export default Toggletheme;