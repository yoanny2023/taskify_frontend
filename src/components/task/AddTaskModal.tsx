"use client";

import React from "react";
import { useTasks } from "@/context/taskContext";

type Props = { onClose: () => void };

export default function AddTaskModal({ onClose }: Props) {
  const { addTask } = useTasks();
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<"todo" | "in-progress" | "done">("todo");
  const [error, setError] = React.useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    addTask({ title: title.trim(), description: description.trim(), status });
    onClose();
    // optional: clear fields (if component stays mounted)
    setTitle("");
    setDescription("");
    setStatus("todo");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-6 rounded-lg shadow-lg"
      >
        <h3 className="text-lg font-semibold text-white mb-4 cursor-pointer">Add Task</h3>

        <label className="block mb-2 text-sm text-zinc-300">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white mb-3"
          placeholder="e.g. Design landing page"
          autoFocus
        />

        <label className="block mb-2 text-sm text-zinc-300">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white mb-3"
          placeholder="Optional notes"
          rows={3}
        />

        <label className="block mb-2 text-sm text-zinc-300">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white mb-4"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {error && <div className="text-red-400 text-sm mb-2">{error}</div>}

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded bg-zinc-700 text-sm text-white cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-700 text-sm text-white cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
