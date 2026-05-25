import { createFileRoute } from "@tanstack/react-router";
import { Brain, Smartphone, Users, GraduationCap } from "lucide-react";
import heroImg from "@/assets/hero-event.jpg";
import { Countdown } from "@/components/Countdown";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "devtech — O futuro da IA e Mobile" },
      {
        name: "description",
        content:
          "Evento devtech 23/07/2026 — palestras de IA, workshop mobile e networking para impulsionar sua carreira.",
      },
      { property: "og:title", content: "devtech — O futuro da IA e Mobile" },
      {
        property: "og:description",
        content:
          "Palestras, workshops e networking sobre IA e desenvolvimento mobile.",
      },
    ],
  }),
  component: Index,
});

const infoCards = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    text: "Entenda como a IA está transformando o mundo e como identificar deepfakes.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Mobile",
    text: "Workshop prático de apps Android e iOS com ferramentas modernas.",
  },
  {
    icon: Users,
    title: "Networking",
    text: "Conecte-se com desenvolvedores, estudantes e profissionais de tecnologia.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação",
    text: "Conteúdo prático e crítico para você aplicar no dia seguinte.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[78vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Plateia assistindo a uma palestra de tecnologia"
          width={1920}
          height={1024}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="mx-6 max-w-2xl rounded-xl bg-white p-10 text-center shadow-[var(--shadow-glow)]">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            // devtech.2026
          </p>
          <h1 className="mt-3 text-4xl font-bold text-neutral-900 sm:text-5xl">
            devtech — O futuro da IA e Mobile
          </h1>
          <p className="mt-4 text-base text-neutral-700 sm:text-lg">
            Experiências imersivas com palestras, workshops e networking para
            impulsionar sua carreira.
          </p>
        </div>
      </section>

      <Countdown />

      {/* Info cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-mono text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o evento */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <p className="font-mono text-sm uppercase tracking-widest text-primary">
          // sobre_o_evento
        </p>
        <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
          O devtech é o encontro de tecnologia mais inovador do ano
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Vivemos em uma era em que a Inteligência Artificial está
            transformando rapidamente a forma como consumimos informação e
            desenvolvemos tecnologia. Pensando nisso, este evento foi criado
            para promover conhecimento, consciência digital e capacitação
            prática.
          </p>
          <p>
            Durante o encontro, especialistas irão apresentar palestras sobre
            conscientização em Inteligência Artificial, abordando temas
            importantes como o impacto da IA no dia a dia e como identificar
            imagens e vídeos falsos (deepfakes), um dos grandes desafios da
            informação na internet atualmente.
          </p>
          <p>
            Além das palestras, o evento contará com um workshop prático de
            desenvolvimento de aplicativos mobile, onde os participantes terão
            a oportunidade de aprender conceitos e técnicas para criar
            aplicativos para Android e iOS, explorando ferramentas modernas e
            boas práticas de desenvolvimento.
          </p>
          <p>
            O objetivo é unir educação tecnológica, pensamento crítico e
            prática, preparando os participantes tanto para compreender os
            riscos e oportunidades da IA quanto para desenvolver suas próprias
            soluções tecnológicas.
          </p>
          <p>
            Este evento é ideal para estudantes, desenvolvedores, profissionais
            de tecnologia e qualquer pessoa interessada em inovação digital.
          </p>
        </div>
      </section>
    </>
  );
}
}
