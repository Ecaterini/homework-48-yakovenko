import { useState } from "react";

export default function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const cleanTitle = title.trim();
    const cleanDesc = description.trim();

    if (!cleanTitle || !cleanDesc) return;

    onAdd({
      id: crypto.randomUUID(),
      title: cleanTitle,
      description: cleanDesc,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-5xl px-4"
    >
      <div className="grid gap-3 rounded-2xl border bg-white p-4 shadow-sm sm:grid-cols-2 sm:gap-4">
        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium">Заголовок</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Список дел на сегодня"
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <div className="sm:col-span-1">
          <label className="mb-1 block text-sm font-medium">Описание</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Что нужно сделать"
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            Заполните оба поля и нажмите “Добавить”
          </p>

          <button
            type="submit"
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 active:opacity-80"
          >
            Добавить карточку
          </button>
        </div>
      </div>
    </form>
  );
}
