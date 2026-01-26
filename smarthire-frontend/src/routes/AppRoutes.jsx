import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import CandidateDashboard from "../pages/CandidateDashboard";
import Login from "../pages/Login";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Register from "../pages/Register";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Auth */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Recruiter */}
      <Route
        path="/recruiter"
        element={
          <ProtectedRoute>
            <RoleRoute role="RECRUITER">
              <DashboardLayout />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route index element={<RecruiterDashboard />} />
      </Route>

      {/* Candidate */}
      <Route
        path="/candidate"
        element={
          <ProtectedRoute>
            <RoleRoute role="CANDIDATE">
              <DashboardLayout />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route index element={<CandidateDashboard />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}