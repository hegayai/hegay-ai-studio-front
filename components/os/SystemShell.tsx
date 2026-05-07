"use client";

export default function SystemShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-24 pb-20 px-10 min-h-screen text-white">
      {children}
    </div>
  );
}
