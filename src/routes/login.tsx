import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — devtech" },
      { name: "description", content: "Acesse sua conta no devtech." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Login simulado — área restrita em breve.");
  }
  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-20">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        // sign_in
      </p>
      <h1 className="mt-2 text-3xl font-bold text-foreground">Entrar</h1>
      <p className="mt-3 text-muted-foreground">
        Acesse sua conta para gerenciar sua inscrição.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required maxLength={255} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" name="senha" type="password" required maxLength={128} />
        </div>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </section>
  );
}