import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import CreateTask from "./pages/Admin/CreateTask";
import ManageTask from "./pages/Admin/ManageTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import MyTasks from "./pages/User/MyTasks";
import UserDashboard from "./pages/User/UserDashboard";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin routes (protected) */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/task" element={<ManageTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/* User routes (protected) */}
          <Route element={<PrivateRoute allowedRoles={["user"]} />}>
            <Route path="/user/user-dashboard" element={<UserDashboard />} />
            <Route path="/user/my-tasks" element={<MyTasks />} />
            <Route path="/user/task-details" element={<ViewTaskDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
