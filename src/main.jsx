import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-40zswxj0o733ftvx.us.auth0.com"
        clientId="6sGlmBB8eUJWI5cHzZdjFdnDkJm99VP9"
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
