import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  function handleDelete(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  const countText = useMemo(() => {
    if (items.length === 0) return "Пока пусто — добавьте первую карточку 👇";
    if (items.length === 1) return "1 карточка";
    if (items.length < 5) return `${items.length} карточки`;
    return `${items.length} карточек`;
  }, [items.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="Інтеграція Tailwind CSS  у React проект"
        subtitle={countText}
      />

      <Form onAdd={handleAdd} />

      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      </main>
    </div>
  );
}
