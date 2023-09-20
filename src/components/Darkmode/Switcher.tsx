import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";
function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked:any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div>
        <DarkModeSwitch
          className="relative right-2"
          checked={darkSide}
          onChange={toggleDarkMode}
          size={20}
          
        />
      </div>
    </>
  );
}
export default Switcher;
