import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Header from "./layout/Header";
import Dashboard from "./components/Dashboard";
import { AppProvider } from "./Context/Context";
import RequireAuth from "./RequireAuth";
import Footer from "./layout/Footer";

function App() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route
          path="/changecolor"
          element={
            <RequireAuth>
              <ChangeColor />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </AppProvider>
  );
}

export default App;
