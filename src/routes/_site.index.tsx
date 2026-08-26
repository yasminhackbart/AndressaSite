import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/andressa-hero.png.asset.json";
import AndressaFoto from "./andressaadv.png"
const heroImg = heroAsset.url;
import { ShieldCheck, Briefcase, Scale, HeartHandshake, ArrowRight, CheckCircle2, Quote } from "lucide-react";
 const endereco =
    "Av. Duque de Caxias, 1023 - Fragata, Pelotas - RS, 96030-003";
export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Andressa Bederode Advocacia — Previdenciário, Trabalhista, Cível e Família" },
      { name: "description", content: "Escritório de advocacia com atuação dedicada em Direito Previdenciário, Trabalhista, Cível e de Família. Atendimento presencial e online." },
      { property: "og:title", content: "Andressa Bederode Advocacia" },
      { property: "og:description", content: "Defesa técnica e estratégica em Previdenciário, Trabalhista, Cível e Família." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const areas = [
  {
    to: "/areas/familia",
    icon: HeartHandshake,
    title: "Direito de Família",
    text: "Divórcio, guarda, pensão alimentícia, inventário, união estável e planejamento sucessório.",
  },
  {
    to: "/areas/previdenciario",
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    text: "Aposentadorias, BPC/LOAS, auxílios, revisões e recursos administrativos e judiciais junto ao INSS.",
  },
  {
    to: "/areas/trabalhista",
    icon: Briefcase,
    title: "Direito Trabalhista",
    text: "Verbas rescisórias, horas extras, assédio moral, reconhecimento de vínculo e defesa do trabalhador.",
  },
  {
    to: "/areas/civel",
    icon: Scale,
    title: "Direito Cível",
    text: "Contratos, indenizações, cobranças, responsabilidade civil e direito do consumidor.",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-surface relative overflow-hidden">
        <div className="container-prose grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          <div>
            <p className="eyebrow">Advogada Andressa Bederode · OAB|RS 117.410</p>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Cada causa importa. Cada cliente merece uma <span className="text-gold italic">defesa de excelência</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Atuação dedicada em Direito de Família, Previdenciário, Trabalhista e Cível.
              Atendimento humano, estratégico e transparente. Acompanho você do primeiro contato à decisão final.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contato" className="btn-gold">
                Agendar consulta <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/areas/familia" className="btn-ghost-gold">
                Conhecer áreas de atuação
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 max-w-md text-sm text-muted-foreground">
              {["Atendimento online em todo o Brasil e Presencial em Pelotas-RS", "Análise inicial sem compromisso", "Comunicação clara em cada etapa", "Honorários transparentes"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-3xl bg-[oklch(0.68_0.17_45/0.12)] blur-3xl" aria-hidden />
            <img
              src={AndressaFoto}
              alt="Dra. Andressa Bederode, advogada em Pelotas/RS"
              width={768}
              height={1024}
              className="relative w-full max-w-md lg:max-w-full aspect-[3/4] rounded-2xl border border-border shadow-[var(--shadow-ember)] object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-xl border border-border bg-card px-5 py-4 shadow-xl">
              <p className="font-serif text-2xl text-gold">+10 anos</p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">de experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="py-24">
        <div className="container-prose">
          <div className="max-w-2xl">
            <p className="eyebrow">Áreas de atuação</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Quatro frentes de atuação, <span className="text-gold italic">um único compromisso</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Cada caso é estudado individualmente. A estratégia certa nasce do entendimento
              completo da sua história e dos seus objetivos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {areas.map(({ to, icon: Icon, title, text }) => (
              <Link key={to} to={to} className="card-area group block">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 text-gold bg-[oklch(0.78_0.13_82/0.08)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gold group-hover:text-ember transition-colors">
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMO TRABALHO */}
      <section className="py-24 border-y border-border bg-[oklch(0.14_0.005_60)]">
        <div className="container-prose">
          <p className="eyebrow text-center">Como trabalho</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-center max-w-2xl mx-auto">
            Um método claro, do primeiro contato à <span className="text-gold italic">solução</span>.
          </h2>

          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Escuta e diagnóstico", d: "Entendo sua situação em detalhes e apresento as possibilidades jurídicas com linguagem acessível." },
              { n: "02", t: "Estratégia personalizada", d: "Definimos juntos o caminho, administrativo ou judicial, com prazos e custos transparentes." },
              { n: "03", t: "Atuação e acompanhamento", d: "Conduzo o processo com atualizações constantes, sem você precisar correr atrás de informação." },
            ].map((s) => (
              <li key={s.n} className="relative">
                <span className="font-serif text-5xl text-gold/40">{s.n}</span>
                <h3 className="mt-3 font-serif text-xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-24">
         <div className="container-prose max-w-3xl text-center">
          <p className="eyebrow text-center">Localização do Escritório</p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-center max-w-2xl mx-auto">
            Atendimento <span className="text-gold italic">Presencial e Online </span>.
          </h2>


         <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        endereco
      )}`}
        className="block mt-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <iframe
        title="Localização"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          endereco
        )}&output=embed`}
        width="100%"
        height="400"
        style={{
          border: 0,
          borderRadius: "12px",
          pointerEvents: "none", // clique abre o Google Maps
        }}
        loading="lazy"
      />
    </a>
        <p>

        </p>
    <a
      href="https://www.google.com/search?sca_esv=e08dd1ab80f18551&rlz=1C1GCEA_enBR1062BR1062&sxsrf=APpeQnt1QBL35oPr_tRbjWsW8lrr8DxnFg:1785521168832&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_w6iCTKnEm3dT7pyTtijHlJRXgNewOfZa5e6FRim85kw3z-MZciZ95sljHuKTA7m_ytw3adQl3JMPHWPcL62lPTN7IXwBctZqyItnZhXV7J-J0jon2823YPQXbLXn595LBFduCMPjpeH0_UzlPxQwTHbwL8ADA8ybEl3L65tJJ_y2zC9hlULJ8GY3F8e7QFsKIL6dik%3D&q=Advogada+Dra.+Andressa+Bederode+-+Advocacia+e+Consultoria+Jur%C3%ADdica+em+Pelotas+no+Fragata+Coment%C3%A1rios&sa=X&ved=2ahUKEwig-obYwP2VAxWeIbkGHd4OD-QQ0bkNegQINxAH&biw=1024&bih=468&dpr=1.88#lrd=0x9511cbe0a93ab4fd:0x50be1b977e217b13,1,,,,"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      ⭐ Ver avaliações no Google
    </a>
    </div>
      </section>




      {/* CTA */}
      <section className="pb-24">
        <div className="container-prose">
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 p-10 sm:p-14 bg-[oklch(0.18_0.005_60)]">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[oklch(0.68_0.17_45/0.25)] blur-3xl" aria-hidden />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="eyebrow">Consulta inicial</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Vamos conversar sobre o seu caso.</h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  Resposta em até 24 horas úteis. Atendimento presencial ou por videochamada.
                </p>
              </div>
              <Link to="/contato" className="btn-ember whitespace-nowrap">
                Falar com a Dra. Andressa <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
