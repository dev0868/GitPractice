import FilterPage from "./pages/FilterPage";
import { Route, Routes } from "react-router-dom";
import CreatePackage from "./pages/Package/CreatePackage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/Filter" element={<FilterPage />}></Route>
        <Route path="/packageForm" element={<CreatePackage />}></Route>
      </Routes>
    </div>
  );
};
export default App;
