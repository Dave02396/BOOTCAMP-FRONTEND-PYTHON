import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, saveTasks } from "../services/taskStorage";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("pendiente");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title,
      status,
      createdAt: new Date().toISOString(),
    };

    const tasks = getTasks();
    saveTasks([...tasks, newTask]);

    navigate("/");
  };

  return (
    <div>
      <h2>Crear tarea</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
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

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default CreateTask;
