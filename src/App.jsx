import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AllRoutes />
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default App;