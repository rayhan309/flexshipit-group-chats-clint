import { Outlet, ScrollRestoration } from "react-router";
import Navber from "../../Components/Navber";
import Footer from "../../Components/Footer";
import { ToastContainer } from "react-toastify";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../../Pages/Loading/Loading";

const RootLayout = () => {
  const { loading } = use(AuthContext);
//   console.log({ user: user, loading: loading });
  return loading ? (
    <Loading />
  ) : (
    <div className="z-50">
      <ScrollRestoration></ScrollRestoration>
      <Navber />
      <main className={`min-h-[calc(100vh-340px)]`}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
