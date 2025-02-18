import Header from "./Cards/header.jsx";
import "./App.css";
import Footer from "./Cards/footer.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
