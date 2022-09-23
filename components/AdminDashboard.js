import React from "react";
import CtaButton from "./CtaButton";

import { useAuth } from "../lib/adminAuth";

const AdminDashboard = () => {
    const { logout, currentUser } = useAuth();

    return (currentUser &&
        <div>
            Admin DashBoard
            <button onClick={() => logout()}><CtaButton  name="logout" /></button>
        </div>
    );
};

export default AdminDashboard;
