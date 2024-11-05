import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "./ReduxToolkit/Component/SnackbarProvider.jsx";
import { store, persistor } from "./ReduxToolkit/Store/store";
import App from "./App.jsx";
import "./index.css";

// Function to register the service worker
const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/src/service-worker.js") // Adjust the path if necessary
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
};

const AppWrapper = () => {
  useEffect(() => {
    registerServiceWorker(); // Register the service worker when the component mounts
  }, []);

  return <App />;
};

// Main render with redux-persist and snackbar provider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <SnackbarProvider>
          <AppWrapper />
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
