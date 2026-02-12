import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTaskStore } from "../store/useTaskStore";

const Home = () => {
  const {
    tasks,
    loading,
    error,
    fetchTasks,
    deleteTask,
  } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar tarea?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    await deleteTask(id);

    Swal.fire({
      title: "Eliminada",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="space-y-4">
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">
          No hay tareas registradas
        </p>
      )}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
        >
          {}
          <div className="space-y-1">
            <h3 className="font-semibold text-gray-800">
              {task.title}
            </h3>

            <p className="text-sm text-gray-500">
              Responsable:{" "}
              <span className="font-medium text-gray-700">
                {task.responsible}
              </span>
            </p>

            <span
              className={`text-xs px-2 py-1 rounded-full font-medium ${
                task.status === "completada"
                  ? "bg-green-100 text-green-700"
                  : task.status === "en proceso"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {task.status}
            </span>
          </div>

          {}
          <div className="flex items-center gap-3">
            <Link
              to={`/tasks/edit/${task.id}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-yellow-100 transition"
            >
              ✏️
            </Link>

            <button
              onClick={() => handleDelete(task.id)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-red-100 transition"
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
