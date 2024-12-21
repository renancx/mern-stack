import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";

export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
