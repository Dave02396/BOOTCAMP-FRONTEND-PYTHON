import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTasks, saveTasks } from "../services/taskStorage";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tasks = getTasks();
    const task = tasks.find((t) => t.id === id);

    if (!task) {
      navigate("/");
      return;
    }

    setTitle(task.title);
    setStatus(task.status);
    setLoading(false);
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tasks = getTasks().map((task) =>
      task.id === id ? { ...task, title, status } : task
    );

    saveTasks(tasks);
    navigate("/");
  };

  if (loading) return <p>Cargando tarea...</p>;

  return (
    <div>
      <h2>Editar tarea</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pendiente">Pendiente</option>
          <option value="en proceso">En proceso</option>
          <option value="completada">Completada</option>
        </select>

        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditTask;
