interface CalloutProps {
  type: "info" | "warning" | "tip";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    bg: "bg-primary-light",
    border: "border-primary",
    icon: "💡",
    defaultTitle: "À retenir",
  },
  warning: {
    bg: "bg-warning-light",
    border: "border-warning",
    icon: "⚠️",
    defaultTitle: "Attention",
  },
  tip: {
    bg: "bg-success-light",
    border: "border-success",
    icon: "✅",
    defaultTitle: "Astuce",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={`${s.bg} border-l-4 ${s.border} rounded-r-lg p-4`}>
      <p className="mb-1 font-semibold">
        {s.icon} {title ?? s.defaultTitle}
      </p>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
