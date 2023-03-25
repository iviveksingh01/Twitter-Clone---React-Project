import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlets from "./components/Outlets";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/main" element={<Outlets />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
