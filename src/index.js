import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/scss/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
import HomeTemplate from "./layouts/HomeTemplate";
import FormTemplate from "./layouts/FormTemplate";
import Login from "./pages/Auth/Login";
import Trending from "./pages/Trending";
import Profile from "./pages/User/Profile";
import UpdateProfile from "./pages/User/UpdateProfile";
import HomePage from "./pages/User/HomePage";
import UserDashboard from "./pages/Admin/User/UserDashboard";
import CreateUser from "./pages/Admin/User/CreateUser";
import UpdateUser from "./pages/Admin/User/UpdateUser";
import FundDashboard from "./pages/Admin/FundDashboard";
import StatisticDashboard from "./pages/Admin/StatisticDashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<HomeTemplate />}>
            <Route index path="/trending" element={<Trending />} />
            <Route index path="/profile/:id" element={<Profile />} />
            <Route
              index
              path="/profile/:id/update"
              element={<UpdateProfile />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route index path="/user-dashboard" element={<UserDashboard />} />
            <Route
              index
              path="/user-dashboard/create-user"
              element={<CreateUser />}
            />
            <Route
              index
              path="/user-dashboard/update-user"
              element={<UpdateUser />}
            />
            <Route index path="/fund-dashboard" element={<FundDashboard />} />
            <Route
              index
              path="/statistic-dashboard"
              element={<StatisticDashboard />}
            />
          </Route>
          <Route element={<FormTemplate />}>
            <Route
              path="/"
              element={<Login />}
              lazy={() => import("./pages/Auth/Login")}
            />
          </Route>
        </Route>
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
