import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";

import BrowseJobs from "../pages/BrowseJobs";
import CandidateDashboard from "../pages/CandidateDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import ViewApplicants from "../pages/ViewApplicants";

import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= AUTH ROUTES ================= */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* ================= DASHBOARD ROUTES ================= */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Recruiter Routes */}
        <Route
          path="/recruiter"
          element={
            <RoleRoute role="RECRUITER">
              <RecruiterDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/view-applicants"
          element={
            <RoleRoute role="RECRUITER">
              <ViewApplicants />
            </RoleRoute>
          }
        />

        {/* Candidate Routes */}
        <Route
          path="/candidate"
          element={
            <RoleRoute role="CANDIDATE">
              <CandidateDashboard />
            </RoleRoute>
          }
        />

        <Route
          path="/browse-jobs"
          element={
            <RoleRoute role="CANDIDATE">
              <BrowseJobs />
            </RoleRoute>
          }
        />
      </Route>

      {/* ================= DEFAULT ================= */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}