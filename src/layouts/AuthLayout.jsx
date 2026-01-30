import { Outlet } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function AuthLayout() {
  return (
    <PageTransition>
      <Outlet />
    </PageTransition>
  );
}