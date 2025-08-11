'use client';

import { useState } from "react";
import { PlusIcon, CheckCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const demoTodos = [
  { id: 1, text: "Réserver les billets d'avion", assignee: "Mathis", done: false },
  { id: 2, text: "Rechercher des hébergements", assignee: "Agathe", done: false },
  { id: 3, text: "Créer le site de voyage", assignee: "Mathis", done: true },
  { id: 4, text: "Définir les dates du voyage", assignee: "Chaima", done: true },
];
const people = ["Chaima", "Erton", "Agathe", "Mathis"];

export default function TodoContent() {
  const [todos, setTodos] = useState(demoTodos);
  const [form, setForm] = useState({ text: "", assignee: "" });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleAdd(e: any) {
    e.preventDefault();
    if (!form.text) return;
    setTodos([
      { id: Date.now(), text: form.text, assignee: form.assignee, done: false },
      ...todos,
    ]);
    setForm({ text: "", assignee: "" });
  }
  function toggleDone(id: number) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }
  function removeTodo(id: number) {
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Fond illustré */}
      <div className="absolute inset-0 w-full h-[320px] md:h-[400px] overflow-hidden rounded-3xl">
        <img
          src="/todo-copenhagen.jpg"
          alt="Todo Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent rounded-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 pb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center drop-shadow-lg">
          To-do List Collaborative
        </h1>
        {/* Formulaire d'ajout */}
        <div className="card rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Nouvelle Tâche</h2>
          <form className="space-y-4" onSubmit={handleAdd}>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tâche</label>
              <input
                type="text"
                name="text"
                value={form.text}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                placeholder="Ex: Réserver les billets d'avion"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Assigné à</label>
              <select
                name="assignee"
                value={form.assignee}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
              >
                <option value="">Sélectionner une personne</option>
                {people.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full shadow-apple text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 smooth"
            >
              Ajouter
            </button>
          </form>
        </div>
        {/* Liste des tâches */}
        <div className="space-y-6">
          {todos.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400">Aucune tâche pour le moment.</div>
          )}
          {todos.map(todo => (
            <div key={todo.id} className={`card rounded-2xl p-5 flex items-center justify-between gap-4 animate-fade-in ${todo.done ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleDone(todo.id)}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full smooth"
                />
                <span className={`text-gray-900 dark:text-white text-base ${todo.done ? 'line-through text-gray-400 dark:text-gray-500' : ''}`}>{todo.text}</span>
                {todo.assignee && (
                  <span className="ml-2 px-3 py-1 rounded-full bg-white/70 dark:bg-gray-800/70 text-xs text-gray-700 dark:text-gray-200 shadow-apple">{todo.assignee}</span>
                )}
              </div>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium px-2 py-1 rounded-full ios-hover smooth"
                title="Supprimer"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 