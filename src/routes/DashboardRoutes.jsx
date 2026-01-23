import { Routes, Route } from "react-router-dom";
import Dashboard from "../paginas/dashboard/Dashboard";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default DashboardRoutes;
