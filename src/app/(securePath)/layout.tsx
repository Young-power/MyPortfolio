// src/app/(securePath)/layout.tsx
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SecureLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Ici, pas de Header ni Footer */}
      <main>{children}</main>
    </div>
  );
}