import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-j7vzkswmn4dv0mds.us.auth0.com"
      clientId="oJC1ifn2FDLkx4M3XCUOfZ22s669vc6F"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
      audience="http://localhost:8000"
      // audience="https://dev-j7vzkswmn4dv0mds.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);