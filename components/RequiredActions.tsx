import React from "react";

export const RequiredActions: React.FC<{ actions: string[] }> = ({
  actions,
}) => {
  if (!actions.length) return null;
  return (
    <div className="mt-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-600 mb-1">
        Required actions
      </div>
      <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
        {actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
};
