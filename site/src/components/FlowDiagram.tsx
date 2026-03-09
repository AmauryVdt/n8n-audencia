interface FlowNode {
  label: string;
  color?: string;
}

interface FlowDiagramProps {
  nodes: FlowNode[];
  title?: string;
}

const colors: Record<string, string> = {
  green: "bg-emerald-100 border-emerald-400 text-emerald-800",
  blue: "bg-blue-100 border-blue-400 text-blue-800",
  purple: "bg-violet-100 border-violet-400 text-violet-800",
  orange: "bg-orange-100 border-orange-400 text-orange-800",
  red: "bg-red-100 border-red-400 text-red-800",
  gray: "bg-gray-100 border-gray-400 text-gray-800",
};

export default function FlowDiagram({ nodes, title }: FlowDiagramProps) {
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      {title && (
        <p className="mb-4 text-center text-sm font-medium text-muted">{title}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`rounded-lg border-2 px-4 py-2 text-sm font-medium ${
                colors[node.color ?? "gray"]
              }`}
            >
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <span className="text-lg text-muted">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
