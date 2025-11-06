export function Section({ title, children, id }) {
  return (
    <section id={id} className="py-12">
      <div className="mx-auto max-w-3xl px-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">{title}</h3>
        )}
        <div className="prose prose-slate mt-4 max-w-none prose-p:leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Note({ children }) {
  return (
    <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
      {children}
    </div>
  );
}
