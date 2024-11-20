import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Layout from "./Layout";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <UserContext>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
                path="/"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
                path="/my-profile"
              />
            </Route>

            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<PageNotFound />} path="*" />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "rgb(55 65 81)",
            },
          }}
        />
      </QueryClientProvider>
    </UserContext>
  );
}

export default App;
