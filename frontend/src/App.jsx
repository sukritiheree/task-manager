import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/Admin/CreateTask";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTask from "./pages/Admin/ManageTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import MyTasks from "./pages/User/MyTasks";
import UserDashboard from "./pages/User/UserDashboard";
import PrivateRoute from "./routes/PrivateRoute";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin protected routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-task" element={<CreateTask />} />
            <Route path="task" element={<ManageTask />} />
            <Route path="users" element={<ManageUsers />} />
          </Route>
        </Route>

        {/* User protected routes */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user">
            <Route path="my-tasks" element={<MyTasks />} />
            <Route path="user-dashboard" element={<UserDashboard />} />
            <Route path="task" element={<ViewTaskDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
