import { useRoutes, Navigate } from "react-router-dom";
import Login from "./Login/Login.jsx";
import LandingPage from "./component/LandingPage.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import DashboardLayout from "./Dashboard/DashboardLayout.jsx";
import Store from "./Dashboard/StoreRegistration/Store.jsx";
import POS from "./Dashboard/POS/POS.jsx";
import Invoice from "./Dashboard/Invoice/Invoice.jsx";
import StoreRegistration from "./Dashboard/StoreRegistration/StoreRegistration.jsx";
import AllStaff from "./Dashboard/Staffmanagement/AllStaff.jsx";
import StaffCreation from "./Dashboard/Staffmanagement/StaffCreationForm.jsx";

export default function AppRouter() {
  // Define routes using the useRoutes hook
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/store" /> },
        { path: "store", element: <Store /> },
        { path: "pos", element: <POS /> },
        { path: "invoice", element: <Invoice /> },
        { path: "staff", element: <AllStaff /> },
        { path: "storeregistration", element: <StoreRegistration /> },
        { path: "staffCreation", element: <StaffCreation /> },
      ],
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  // Return the result of the useRoutes hook
  return routes;
}
