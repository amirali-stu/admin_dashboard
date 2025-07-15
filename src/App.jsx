import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";
import NewUser from "./pages/NewUser/NewUser";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
// import routes from "./routes";

function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <UserList /> },
    { path: "/products", element: <Products /> },
    { path: "/new-user", element: <NewUser /> },
  ];
  const router = useRoutes(routes);

  return (
    <>
      <TopBar />
      <div className="flex w-full min-h-screen">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

export default App;
