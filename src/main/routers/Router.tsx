import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={""} />
      <Route path="/register" element={""} />
    </Routes>
  );
}

export default Router;
