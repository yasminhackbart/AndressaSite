import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/_site/areas/trabalhista")({
  head: () => ({
    meta: [
      { title: "Direito Trabalhista — Andressa Bederode Advocacia" },
      { name: "description", content: "Defesa de trabalhadores: verbas rescisórias, horas extras, assédio moral, reconhecimento de vínculo, danos morais e materiais." },
      { property: "og:title", content: "Direito Trabalhista — Defesa do trabalhador" },
      { property: "og:description", content: "Verbas rescisórias, horas extras, assédio moral, vínculo e indenizações." },
      { property: "og:url", content: "/areas/trabalhista" },
    ],
    links: [{ rel: "canonical", href: "/areas/trabalhista" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="Área de atuação"
      icon={Briefcase}
      title="Direito Trabalhista —"
      highlight="defesa de quem trabalha"
      intro="Atuação preventiva e contenciosa em favor de empregados. Análise de contracheques, CTPS, ponto e contratos para identificar verbas e direitos não pagos corretamente."
      services={[
        { t: "Verbas rescisórias", d: "Cálculo e cobrança de saldo, aviso, férias, 13º, FGTS e multa de 40% após dispensa indevida." },
        { t: "Horas extras e jornada", d: "Banco de horas irregular, intervalos suprimidos, sobreaviso e adicional noturno." },
        { t: "Reconhecimento de vínculo", d: "PJ irregular, terceirização ilícita e relação de emprego não anotada em CTPS." },
        { t: "Assédio e dano moral", d: "Indenizações por assédio moral, sexual, acidente do trabalho e doença ocupacional." },
        { t: "Adicionais", d: "Insalubridade, periculosidade, transferência e acúmulo de função." },
        { t: "Estabilidades e reintegração", d: "Gestante, acidentado, CIPA e demais hipóteses de estabilidade." },
      ]}
      faqs={[
        { q: "Trabalho sem carteira assinada, tenho direitos?", a: "Sim. Desde que seja comprada a relação de emprego, conforme previsto em lei" },
        { q: "Fui demitido sem justa causa. Quais são meus direitos?", a: "O trabalhador pode ter direito a verbas recisórias, aviso prévio, saque do FGTS, multa sobre o FGTS e, se preencher os requisitos, ao seguro-desemprego." },
        { q: "Assédio Moral no trabalho gera indenização?", a: "Sim, dependendo das provas apresentadas é possível ter direito a indenização e outras medidas previstas na legislação trabalhista." },
      ]}
    />
  ),
});
