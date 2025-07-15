import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";
import NewUser from "./pages/NewUser/NewUser";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <UserList /> },
  { path: "/products", element: <Products /> },
  { path: "/new-user", element: <NewUser /> },
];

export default routes;
