import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <main className="max-w-4xl mx-auto py-10 px-4">{children}</main>
  </div>
);
