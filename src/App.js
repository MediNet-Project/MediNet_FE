import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Theme } from "@twilio-paste/core/theme";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <Theme.Provider theme="default">
        <ChakraProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
            <ToastContainer />
          </Suspense>
        </ChakraProvider>
      </Theme.Provider>
    </Provider>
  );
}

export default App;
