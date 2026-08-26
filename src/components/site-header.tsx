import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./routes/logo.png"

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/areas/familia", label: "Família" },
  { to: "/areas/previdenciario", label: "Previdenciário" },
  { to: "/areas/trabalhista", label: "Trabalhista" },
  { to: "/areas/civel", label: "Cível" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[oklch(0.32_0.012_70/0.4)] bg-[oklch(0.13_0.005_60/0.85)] backdrop-blur-md">
      <div className="container-prose flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-4 group" onClick={() => setOpen(false)}>
          <img
            src={Logo}
            alt="Logo Andressa Bederode Advocacia"
            className="h-30 w-30 object-cover rounded-xl"
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-foreground tracking-tight">Andressa Bederode</span>
            <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-gold">Advocacia</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contato" className="btn-gold hidden lg:inline-flex !py-2 !px-4 !text-xs">
          Clique Aqui e Entre em Contato
        </Link>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-[oklch(0.14_0.005_60)]">
          <div className="container-prose flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-muted-foreground border-b border-border/40 last:border-b-0"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="btn-gold mt-4 mb-2">
              Agendar consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
