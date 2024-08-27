import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense } from "react";
import { useTheme } from "./components/theme/useTheme";
import { ClassName } from "./helpers/ClassName";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={ClassName("app", { hovers: false, selected: true }, [
        theme,
        "cls1",
      ])}
    >
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная страница</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
