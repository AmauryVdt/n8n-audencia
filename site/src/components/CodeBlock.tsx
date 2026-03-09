interface CodeBlockProps {
  title?: string;
  children: string;
}

export default function CodeBlock({ title, children }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {title && (
        <div className="border-b border-border bg-gray-50 px-4 py-2 text-xs font-medium text-muted">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}
