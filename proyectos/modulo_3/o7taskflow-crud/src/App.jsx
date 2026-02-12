import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./assets/logo-o7taskflow.png";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {}
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="O7 TaskFlow Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-500">Gestión de tareas</p>
          </div>

          <Link
            to="/tasks/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            ➕ Nueva tarea
          </Link>
        </div>
      </header>

      {}
      <main className="max-w-4xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
