import { createFileRoute } from "@tanstack/react-router";
import { Brain, ShieldAlert, Smartphone } from "lucide-react";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — devtech" },
      {
        name: "description",
        content: "Programação do devtech 2026: palestras de IA e workshop mobile.",
      },
    ],
  }),
  component: EventosPage,
});

const agenda = [
  {
    horario: "09:00",
    titulo: "Palestra: Conscientização em Inteligência Artificial",
    descricao:
      "O impacto da IA no dia a dia, oportunidades e responsabilidades para profissionais e estudantes.",
    icon: Brain,
  },
  {
    horario: "11:00",
    titulo: "Palestra: Deepfakes e a verdade na internet",
    descricao:
      "Como identificar imagens e vídeos falsos gerados por IA e pensar criticamente sobre conteúdo digital.",
    icon: ShieldAlert,
  },
  {
    horario: "14:00",
    titulo: "Workshop: Desenvolvimento Mobile (Android & iOS)",
    descricao:
      "Mão na massa criando aplicativos mobile com ferramentas modernas e boas práticas.",
    icon: Smartphone,
  },
];

function EventosPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">
        // programacao
      </p>
      <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
        Programação · 23/07/2026
      </h1>
      <p className="mt-3 text-muted-foreground">
        Um dia inteiro de palestras, workshop prático e networking.
      </p>

      <ol className="mt-10 space-y-4">
        {agenda.map(({ horario, titulo, descricao, icon: Icon }) => (
          <li
            key={titulo}
            className="flex gap-5 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-sm text-primary">{horario}</div>
              <h2 className="mt-1 font-semibold text-foreground">{titulo}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{descricao}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}