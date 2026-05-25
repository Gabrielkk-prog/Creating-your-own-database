import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/cadastro", label: "Cadastro" },
  { to: "/eventos", label: "Eventos" },
  { to: "/login", label: "Login" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-lg font-bold text-foreground">
          <Code2 className="h-5 w-5 text-primary" />
          <span>
            <span className="text-primary">dev</span>tech
          </span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:bg-secondary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}