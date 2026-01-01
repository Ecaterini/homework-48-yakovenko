export default function Header({ title, subtitle }) {
  return (
    <header className="py-8">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-gray-600 sm:text-base">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
