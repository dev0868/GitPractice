import FilterPage from "./pages/FilterPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Filter" element={<FilterPage />}></Route>
      </Routes>
    </div>
  );
};
export default App;
