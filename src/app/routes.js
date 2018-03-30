import Home from "./home";
import Users from "./users";

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    name: "Users",
    path: "/users",
    component: Users,
    exact: true
  }
];
