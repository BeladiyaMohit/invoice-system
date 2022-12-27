import WelComePage from "./pages/welcomePage";
import LogInPage from "./pages/logInPage";
import DashboardPage from "./pages/dashboardPage";
import ErrorPage from "./pages/errorPage";
import ExpensePage from "./pages/expensePage";

const routes = [
  {
    path: "/",
    name: "WelComePage",
    component: WelComePage,
    isPrivate: false,
    layout: "public",
  },
  {
    path: "/login",
    name: "LogInPage",
    component: LogInPage,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "/expense",
    name: "ExpensePage",
    component: ExpensePage,
    isPrivate: true,
    layout: "private",
  },
  {
    path: "*",
    name: "Error",
    component: ErrorPage,
    isPrivate: false,
    layout: "private",
  },
];

export default routes;
