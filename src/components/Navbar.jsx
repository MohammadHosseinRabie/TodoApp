import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Navbar = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {isAuthenticated && ` welcome ${user.name}`}
            {!isAuthenticated && (
              <button className='btn btn-warning btn-sm ms-auto' onClick={loginWithRedirect}>
                LOGIN
              </button>
            )}

            {isAuthenticated && (
              <button
                className='btn btn-danger btn-sm ms-auto'
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }>
                LOGOUT
              </button>
            )}
        </div>
      </nav>
    </>
  );
};
