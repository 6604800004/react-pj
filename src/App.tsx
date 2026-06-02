import { createBrowserRouter, RouterProvider } from "react-router";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import NotFound from "./components/NotFound";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <UserList /> },
  { path: "/user/:id", element: <UserDetail /> },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
