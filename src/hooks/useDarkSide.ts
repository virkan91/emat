import { useEffect, useState } from "react";

function useDarkSide() {
  const [theme, setTheme] = useState<any>(localStorage.theme);
  const colorTheme:any = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root: any = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
export default useDarkSide;
