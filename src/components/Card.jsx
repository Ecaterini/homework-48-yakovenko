export default function Card({ item, onDelete }) {
  const date = new Date(item.createdAt);

  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          <p className="mt-3 text-xs text-gray-400">
            {date.toLocaleString()}
          </p>
        </div>

        <button
          onClick={() => onDelete(item.id)}
          className="rounded-xl border px-3 py-1 text-xs font-semibold hover:bg-gray-50"
          aria-label="Удалить"
          title="Удалить"
        >
          ✕
        </button>
      </div>
    </article>
  );
}