import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTasks, saveTasks } from "../services/taskStorage";
import { RESPONSABLES } from "../data/responsables";
import Swal from "sweetalert2";
import { useTaskStore } from "../store/useTaskStore";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const TaskForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    title: "",
    status: "pendiente",
    responsible: "",
  });

  useEffect(() => {
    if (id) {
      const tasks = getTasks();
      const taskToEdit = tasks.find((t) => t.id === id);

      if (taskToEdit) {
        setTask({
          responsible: "",
          ...taskToEdit,
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
const { createTask, updateTask } = useTaskStore();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (id) {
    await updateTask(id, task);
  } else {
    await createTask(task);
  }

  navigate("/");
};


  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        {id ? "Editar tarea" : "Nueva tarea"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {}
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {}
        <div>
          <label className="block text-sm font-medium mb-1">Estado</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En Proceso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Responsable</label>

          <select
            name="responsible"
            value={task.responsible}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Seleccione responsable</option>
            {RESPONSABLES.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>

        {}
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
