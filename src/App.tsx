import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./views/Homepage/Homepage";
import { Details } from "./views/Details/Details";

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route element={<Homepage/>} path="/"/>
      <Route element={<Details/>} path="/pokemon/:name"/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
