import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/material";
import { NotificationContainer } from "react-notifications";
import { AppLayout } from "./components/layout/app-layout";
import { UserProvider } from "./context/user-context";
import LoadingPage from "./LoadingPage";
import "./loader.css";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div id="root">
      <UserProvider>
        <Suspense fallback={null}>
          {isLoading ? (
            <LoadingPage loadingDelay={3000}>
              <div className="page-container">
                <Router>
                  <AppLayout />
                  <NotificationContainer />
                </Router>
              </div>
            </LoadingPage>
          ) : (
            <Container className="page-container">
              <Router>
                <AppLayout />
                <NotificationContainer />
              </Router>
            </Container>
          )}
        </Suspense>
      </UserProvider>
    </div>
  );
};
