import { useContext } from "react";
import {ThemeContext} from "./context/Themecontext";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";
import Toggletheme from "./Component/Toggletheme";


const App = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "light" : "dark"}>

      <Navbar />

      <div className="container">
        <Profile />
        <Toggletheme />
      </div>

    </div>
  );
};

export default App;