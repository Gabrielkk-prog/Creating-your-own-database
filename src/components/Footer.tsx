export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-6 text-center font-mono text-sm text-muted-foreground">
        © {new Date().getFullYear()} devtech — Todos os direitos reservados
      </div>
    </footer>
  );
}