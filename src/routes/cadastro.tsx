import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Cadastro — devtech" },
      { name: "description", content: "Inscreva-se no evento devtech 2026." },
    ],
  }),
  component: CadastroPage,
});

const schema = z.object({
  nome: z.string().trim().min(1, "Nome obrigatório").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  nascimento: z.string().min(1, "Data obrigatória"),
  area: z.enum(["Estudante", "Desenvolvedor", "Outros"], {
    message: "Selecione uma área",
  }),
  origem: z.enum(["Instagram", "Faculdade", "Amigos"], {
    message: "Selecione uma opção",
  }),
  interesses: z.array(z.string()).min(1, "Selecione ao menos um interesse"),
  observacoes: z.string().max(1000).optional(),
});

const interessesOptions = ["Palestra IA", "Workshop Mobile"] as const;

function CadastroPage() {
  const [interesses, setInteresses] = useState<string[]>([]);
  const [area, setArea] = useState<string>("");
  const [origem, setOrigem] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefone: String(fd.get("telefone") ?? ""),
      nascimento: String(fd.get("nascimento") ?? ""),
      area,
      origem,
      interesses,
      observacoes: String(fd.get("observacoes") ?? ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Verifique o formulário");
      return;
    }
    toast.success("Inscrição enviada com sucesso!");
    e.currentTarget.reset();
    setInteresses([]);
    setArea("");
    setOrigem("");
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        // inscricao
      </p>
      <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
        Cadastre-se no devtech
      </h1>
      <p className="mt-3 text-muted-foreground">
        Preencha o formulário abaixo para garantir sua vaga.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-10 space-y-6 rounded-xl border border-border bg-card p-6 sm:p-8"
      >
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" maxLength={100} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" maxLength={255} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input id="telefone" name="telefone" maxLength={20} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="nascimento">Data de Nascimento</Label>
          <Input id="nascimento" name="nascimento" type="date" required />
        </div>

        <div className="space-y-2">
          <Label>Área de atuação</Label>
          <Select value={area} onValueChange={setArea}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Estudante">Estudante</SelectItem>
              <SelectItem value="Desenvolvedor">Desenvolvedor</SelectItem>
              <SelectItem value="Outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label>Como ficou sabendo?</Label>
          <RadioGroup value={origem} onValueChange={setOrigem}>
            {["Instagram", "Faculdade", "Amigos"].map((opt) => (
              <div key={opt} className="flex items-center gap-2">
                <RadioGroupItem value={opt} id={`origem-${opt}`} />
                <Label htmlFor={`origem-${opt}`} className="font-normal">
                  {opt}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <Label>Interesses</Label>
          {interessesOptions.map((opt) => (
            <div key={opt} className="flex items-center gap-2">
              <Checkbox
                id={`int-${opt}`}
                checked={interesses.includes(opt)}
                onCheckedChange={(c) =>
                  setInteresses((prev) =>
                    c ? [...prev, opt] : prev.filter((x) => x !== opt),
                  )
                }
              />
              <Label htmlFor={`int-${opt}`} className="font-normal">
                {opt}
              </Label>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="observacoes">Observações</Label>
          <Textarea id="observacoes" name="observacoes" maxLength={1000} rows={4} />
        </div>

        <Button type="submit" className="w-full">
          Inscrever-se
        </Button>
      </form>
    </section>
  );
}