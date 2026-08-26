import { Link } from "@tanstack/react-router";
import { Scale, MessageCircle, MapPin } from "lucide-react";
import { ADDRESS_LINES, MAPS_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.12_0.005_60)]">
      <div className="container-prose py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--gradient-gold)] text-[color:var(--primary-foreground)]">
              <Scale className="h-4 w-4" strokeWidth={2.25} />
            </span>
            <span className="font-serif text-lg">Andressa Bederode <span className="text-gold">Advocacia</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Atuação dedicada em Direito Previdenciário, Trabalhista, Cível e de Família.
            Atendimento humano, técnico e estratégico para cada cliente.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Áreas</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/areas/familia" className="hover:text-gold">Família</Link></li>
            <li><Link to="/areas/previdenciario" className="hover:text-gold">Previdenciário</Link></li>
            <li><Link to="/areas/trabalhista" className="hover:text-gold">Trabalhista</Link></li>
            <li><Link to="/areas/civel" className="hover:text-gold">Cível</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contato</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 mt-0.5 text-gold" /> WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-gold"
              >
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>
                  {ADDRESS_LINES.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Andressa Bederode Advocacia. Todos os direitos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}
