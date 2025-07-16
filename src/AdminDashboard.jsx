import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";
import NewUser from "./pages/NewUser/NewUser";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader/Loader";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const [dataDel, setDataDel] = useState("");

  const routes = [
    { path: "/", element: <Home /> },
    {
      path: "/users",
      element: (
        <UserList
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          dataDel={dataDel}
          setDataDel={setDataDel}
        />
      ),
    },
    {
      path: "/products",
      element: (
        <Products
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          dataDel={dataDel}
          setDataDel={setDataDel}
        />
      ),
    },
    { path: "/new-user", element: <NewUser /> },
  ];
  const router = useRoutes(routes);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen">
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="grid w-full min-h-[calc(100vh-64px)] md:grid-cols-[256px_1fr] max-md:grid-cols-[0.5_1fr]">
        <Sidebar isOpen={isOpen} />
        {router}
      </div>

      {/* انیمیشن سایه مشکی */}
      {/* <AnimatePresence>
        <motion.div
          key="overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-black z-50"
        />
      </AnimatePresence> */}
    </div>
  );
}

export default AdminDashboard;
