import { Route, Routes } from "react-router-dom";
import "./App.css";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="*" element={<p>404 Not found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
