import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { ADDRESS_SHORT, MAPS_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export const Route = createFileRoute("/_site/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Andressa Bederode Advocacia" },
      { name: "description", content: "Fale agora pelo WhatsApp com a Dra. Andressa Bederode. Atendimento humano, técnico e sigiloso, presencial e online em todo o Brasil." },
      { property: "og:title", content: "Contato — Andressa Bederode Advocacia" },
      { property: "og:description", content: "Fale direto pelo WhatsApp. Atendimento presencial e online." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <section className="hero-surface py-20">
        <div className="container-prose max-w-3xl">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">
            Vamos conversar sobre o <span className="text-gold italic">seu caso</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            O atendimento é direto pelo WhatsApp, rápido, prático e com total sigilo.
            Conte resumidamente a sua situação e receba o retorno o mais rápido possível para agendarmos sua consulta inicial.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8 inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp · {WHATSAPP_DISPLAY}
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="container-prose grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: MessageCircle, t: "WhatsApp", d: WHATSAPP_DISPLAY, href: WHATSAPP_URL },
            { icon: Clock, t: "Horário", d: "Seg a sex · 09h às 18h" },
            { icon: MapPin, t: "Escritório", d: ADDRESS_SHORT, href: MAPS_URL },
            { icon: ShieldCheck, t: "Sigilo", d: "Conversa protegida pelo sigilo profissional" },
          ].map(({ icon: Icon, t, d, href }) => {
            const inner = (
              <>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold/40 text-gold bg-[oklch(0.78_0.13_82/0.08)]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-serif">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </>
            );
            return href ? (
              <a
                key={t}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-lg border border-border p-5 bg-card hover:border-gold/60 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div key={t} className="flex gap-4 rounded-lg border border-border p-5 bg-card">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="container-prose mt-12 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-gold">
            ← Voltar à página inicial
          </Link>
        </div>
      </section>
    </>
  );
}
