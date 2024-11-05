import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomeWrapper from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HomeWrapper />
    </AuthProvider>
  </StrictMode>
);
