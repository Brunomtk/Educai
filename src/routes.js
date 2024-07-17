
// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Matematica from "layouts/Matematica";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Matematica",
    key: "matematica",
    route: "/matematica",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-books" />
    ),
    component: <Matematica />,
  },
  {
    type: "route",
    name: "Empresarios",
    key: "Empresarios",
    route: "/Portugues",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-briefcase-24" />
    ),
    component: <Matematica />,
  },
  {
    type: "route",
    name: "Geografia",
    key: "Geografia",
    route: "/Geografia",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-world" />
    ),
    component: <Matematica />,
  },
  
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
