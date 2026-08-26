import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/_site/areas/civel")({
  head: () => ({
    meta: [
      { title: "Direito Cível — Andressa Bederode Advocacia" },
      { name: "description", content: "Contratos, indenizações, cobranças, responsabilidade civil e direito do consumidor. Atuação preventiva e em litígios." },
      { property: "og:title", content: "Direito Cível — Contratos, indenizações e consumidor" },
      { property: "og:description", content: "Contratos, indenizações, cobranças e direito do consumidor." },
      { property: "og:url", content: "/areas/civel" },
    ],
    links: [{ rel: "canonical", href: "/areas/civel" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="Área de atuação"
      icon={Scale}
      title="Direito Cível —"
      highlight="contratos, indenizações e consumidor"
      intro="Assessoria em relações entre particulares e empresas. Da redação de contratos à reparação de danos, o objetivo é prevenir conflitos e resolver os existentes com eficiência."
      services={[
        { t: "Contratos", d: "Elaboração, revisão e análise de contratos de prestação de serviços, locação, compra e venda e particulares." },
        { t: "Indenizações", d: "Danos morais e materiais por acidentes, descumprimento contratual, negativação indevida e exposição." },
        { t: "Direito do consumidor", d: "Vícios e defeitos de produtos, cobrança indevida, planos de saúde, transporte aéreo e bancos." },
        { t: "Cobranças e execuções", d: "Cobrança de dívidas, ações monitórias e execução de títulos extrajudiciais." },
        { t: "Responsabilidade civil", d: "Reparação por atos ilícitos, acidentes de trânsito e responsabilidade profissional." },
        { t: "Direito imobiliário", d: "Despejo, revisão de aluguel, usucapião, regularização e questões condominiais." },
      ]}
      faqs={[
        { q: "Vale a pena processar por dano moral?", a: "Depende da gravidade, da prova disponível e do impacto sofrido. Faço uma análise honesta antes de recomendar a ação." },
        { q: "Posso resolver sem ir à Justiça?", a: "Sempre que possível buscamos solução extrajudicial: notificação, negociação ou mediação, que costuma ser mais rápida." },
        { q: "Contratos Verbais são Válidos?", a: "Em muitos casos eles são válidos, desde que seja possível comprovar o acordo entre as partes" },
      ]}
    />
  ),
});
