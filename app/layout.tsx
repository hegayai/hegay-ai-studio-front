import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { OsShell } from "./os-shell";
export const metadata: Metadata = {
  title: "Hegay OS Studio",
  description: "Cinematic creative operating system.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Providers>
          <OsShell>{children}</OsShell>
        </Providers>
      </body>
    </html>
  );
}
