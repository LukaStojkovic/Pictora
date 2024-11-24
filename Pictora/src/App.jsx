import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Layout from "./Layout";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ui/ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
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
              path="/account"
            />
            <Route
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
              path="/profile/:userId"
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
  );
}

export default App;
