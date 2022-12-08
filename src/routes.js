import { Navigate } from 'react-router';
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import Notes from "./pages/Notes";
import Assignments from "./pages/Assignments";
import Exams from "./pages/Exams";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Components/Home";

const routes = (isLoggedIn) => [
    {
        path: "/dashboard",
        element: [isLoggedIn ? <DashboardLayout/>: <Navigate to="/login"/>],
        children: [
            { element: <Navigate to="/dashboard" replace /> },
            { path: '', element: <Home /> },
            { path: 'notes', element: <Notes /> },
            { path: 'assignments', element: <Assignments /> },
            { path: 'examinations', element: <Exams /> },
            { path: 'resources', element: <Exams /> },
            { path: 'instructor', element: <Exams /> },
            { path: 'chat', element: <Exams /> },
        ]
    },
    {
        path: "/",
        element: !isLoggedIn ? <LogoOnlyLayout /> : <Navigate to="/dashboard" />,
        children: [
            { path: 'login', element: <Home /> },
            { path: 'signup', element: <SignUp /> }
            ]
    }
]
export default routes;