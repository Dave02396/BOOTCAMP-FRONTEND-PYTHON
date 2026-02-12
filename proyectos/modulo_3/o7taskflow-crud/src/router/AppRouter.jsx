import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import TaskForm from "../pages/TaskForm";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tasks/new",
        element: <TaskForm />,
      },
      {
        path: "tasks/edit/:id",
        element: <TaskForm />,
      },
    ],
  },
]);

export default AppRouter;
