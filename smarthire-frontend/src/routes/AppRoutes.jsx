import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";

import BrowseJobs from "../pages/BrowseJobs";
import CandidateDashboard from "../pages/CandidateDashboard";
import ManageJobs from "../pages/ManageJobs";
import MyApplications from "../pages/MyApplications";
import PostJob from "../pages/PostJob";
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
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          {/* Candidate */}
          <Route
            path="/candidate"
            element={
              <RoleRoute role="CANDIDATE">
                <CandidateDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/candidate/jobs"
            element={
              <RoleRoute role="CANDIDATE">
                <BrowseJobs />
              </RoleRoute>
            }
          />
          <Route
            path="/candidate/applications"
            element={
              <RoleRoute role="CANDIDATE">
                <MyApplications />
              </RoleRoute>
            }
          />

          {/* Recruiter */}
          <Route
            path="/recruiter"
            element={
              <RoleRoute role="RECRUITER">
                <RecruiterDashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/recruiter/post-job"
            element={
              <RoleRoute role="RECRUITER">
                <PostJob />
              </RoleRoute>
            }
          />
          <Route
            path="/recruiter/manage-jobs"
            element={
              <RoleRoute role="RECRUITER">
                <ManageJobs />
              </RoleRoute>
            }
          />
          <Route
            path="/recruiter/view-applicants"
            element={
              <RoleRoute role="RECRUITER">
                <ViewApplicants />
              </RoleRoute>
            }
          />
        </Route>
      </Route>

      {/* ================= DEFAULT ROUTES ================= */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}