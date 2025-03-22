import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
}
