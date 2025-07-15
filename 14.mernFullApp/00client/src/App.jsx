import {} from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stateManagement/store";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";
import { ProtectedRoutes } from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />

            {/* Protected routes below */}
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/users" element={<Users />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
