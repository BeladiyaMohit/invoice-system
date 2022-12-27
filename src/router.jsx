// import LogInPage from "./pages/logIn";
import DashboardPage from "./pages/dashboard";
// import ExpensePage from "./pages/expense";

const routes = [
  // {
  //   path: "/login",
  //   name: "LogInPage",
  //   component: LogInPage,
  //   isPrivate: false,
  //   layout: "auth",
  // },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    isPrivate: true,
    layout: "private",
  },
  // {
  //   path: "/expense",
  //   name: "ExpensePage",
  //   component: ExpensePage,
  //   isPrivate: true,
  //   layout: "private",
  // },
  
];

export default routes;
