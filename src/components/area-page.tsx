import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, type LucideIcon } from "lucide-react";

export interface AreaPageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  icon: LucideIcon;
  services: { t: string; d: string }[];
  faqs?: { q: string; a: string }[];
}

export function AreaPage({ eyebrow, title, highlight, intro, icon: Icon, services, faqs }: AreaPageProps) {
  return (
    <>
      <section className="hero-surface py-20">
        <div className="container-prose max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--gradient-gold)] text-[color:var(--primary-foreground)]">
              <Icon className="h-5 w-5" strokeWidth={2.25} />
            </span>
            <p className="eyebrow !mt-0">{eyebrow}</p>
          </div>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl leading-tight">
            {title} <span className="text-gold italic">{highlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="btn-gold">Agendar consulta <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/" className="btn-ghost-gold">Ver outras áreas</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose">
          <p className="eyebrow">Como posso ajudar</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl max-w-2xl">Principais demandas atendidas</h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.t} className="card-area">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 text-gold shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg">{s.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="py-20 border-t border-border bg-[oklch(0.14_0.005_60)]">
          <div className="container-prose max-w-3xl">
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Dúvidas comuns nessa área</h2>
            <div className="mt-10 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-serif text-lg list-none">
                    {f.q}
                    <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="container-prose">
          <div className="rounded-2xl border border-gold/30 p-10 sm:p-14 bg-[oklch(0.18_0.005_60)] text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Pronto para entender as suas opções?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A análise inicial é feita com tempo, escuta e total sigilo.
            </p>
            <Link to="/contato" className="btn-ember mt-8 inline-flex">
              Falar com a Dra. Andressa <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
