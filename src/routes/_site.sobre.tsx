import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, GraduationCap, Award, Users } from "lucide-react";
import Andressa from "./andressa.png"

export const Route = createFileRoute("/_site/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Andressa Bederode Advocacia" },
      { name: "description", content: "Conheça a trajetória, valores e método de trabalho da Dra. Andressa Bederode, advogada com atuação em Previdenciário, Trabalhista, Cível e Família." },
      { property: "og:title", content: "Sobre — Andressa Bederode Advocacia" },
      { property: "og:description", content: "Trajetória, valores e método da Dra. Andressa Bederode." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="hero-surface py-20">
        <div className="container-prose grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div className="max-w-2xl">
            <p className="eyebrow">Sobre o escritório</p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">
              Advocacia conduzida com <span className="text-gold italic">técnica, escuta e estratégia</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A advocacia que pratico parte de uma convicção simples: cada processo carrega
              uma história e a melhor solução jurídica nasce do entendimento completo dessa história.
            </p>
          </div>

          <figure className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-gold/30 via-ember/20 to-transparent blur-xl" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/30 bg-muted/40">
              <img
                src={Andressa}
                alt="Dra. Andressa Bederode, advogada"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Sou a <strong className="text-foreground">Dra. Andressa Bederode</strong>, advogada com
              atuação dedicada nas áreas de Direito Previdenciário, Trabalhista, Cível e de Família.
              Construí minha trajetória defendendo trabalhadores, segurados do INSS e famílias em
              momentos decisivos.
            </p>
            <p>
              Acredito em uma advocacia próxima, onde o cliente entende o que está acontecendo,
              participa das decisões e nunca se sente perdido em meio a termos técnicos. Cada
              estratégia é construída em conjunto.
            </p>
            <p>
              O escritório atende de forma presencial e online, com a mesma seriedade e
              comprometimento, em causas administrativas e judiciais por todo o Brasil.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Comunicação clara e sem juridiquês",
                "Honorários transparentes desde o início",
                "Atualizações periódicas do andamento",
                "Sigilo absoluto e ética profissional",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-4">
            {[
              { icon: GraduationCap, t: "Formação", d: "Bacharel em Direito · Pós-graduação em áreas de atuação" },
              { icon: Award, t: "Inscrição", d: "OAB/RS 117.410" },
              { icon: Users, t: "Atendimento", d: "Presencial e online · Brasil todo" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-area">
                <Icon className="h-5 w-5 text-gold" />
                <p className="mt-3 font-serif text-lg">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </aside>
        </div>

        <div className="container-prose mt-16 text-center">
          <Link to="/contato" className="btn-gold">Agendar uma consulta</Link>
        </div>
      </section>
    </>
  );
}
