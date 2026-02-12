import { create } from "zustand";
import { getTasks, saveTasks } from "../services/taskStorage";

export const useTaskStore = create((set) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    try {
      set({ loading: true, error: null });

      await new Promise((res) => setTimeout(res, 500));

      const data = getTasks();
      set({ tasks: data, loading: false });
    } catch (err) {
      set({ error: "Error cargando tareas", loading: false });
    }
  },

  createTask: async (task) => {
    try {
      set({ loading: true, error: null });

      const current = getTasks();
      const updated = [
        ...current,
        { ...task, id: crypto.randomUUID() },
      ];

      saveTasks(updated);
      set({ tasks: updated, loading: false });
    } catch (err) {
      set({ error: "Error creando tarea", loading: false });
    }
  },

  updateTask: async (id, updatedTask) => {
    try {
      set({ loading: true, error: null });

      const current = getTasks();
      const updated = current.map((t) =>
        t.id === id ? updatedTask : t
      );

      saveTasks(updated);
      set({ tasks: updated, loading: false });
    } catch (err) {
      set({ error: "Error actualizando tarea", loading: false });
    }
  },

  deleteTask: async (id) => {
    try {
      set({ loading: true, error: null });

      const current = getTasks();
      const updated = current.filter((t) => t.id !== id);

      saveTasks(updated);
      set({ tasks: updated, loading: false });
    } catch (err) {
      set({ error: "Error eliminando tarea", loading: false });
    }
  },
}));
