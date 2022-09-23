
import { useAuth } from "../../lib/adminAuth";
import React from "react";
import AdminLogin from "../../components/AdminLogin";
import AdminDashboard from "./AdminDashboard";

const Index = () => {
    const { currentUser } = useAuth();

    return <>{!currentUser ? <AdminLogin /> : <AdminDashboard />}</>;
};

export default Index;
