import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/_site/areas/previdenciario")({
  head: () => ({
    meta: [
      { title: "Direito Previdenciário — Andressa Bederode Advocacia" },
      { name: "description", content: "Aposentadorias, BPC/LOAS, auxílios por incapacidade, pensão por morte e revisões junto ao INSS. Atuação administrativa e judicial." },
      { property: "og:title", content: "Direito Previdenciário — INSS e benefícios" },
      { property: "og:description", content: "Aposentadorias, auxílios, BPC/LOAS, pensão por morte e revisões junto ao INSS." },
      { property: "og:url", content: "/areas/previdenciario" },
    ],
    links: [{ rel: "canonical", href: "/areas/previdenciario" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="Área de atuação"
      icon={ShieldCheck}
      title="Direito Previdenciário —"
      highlight="seus direitos junto ao INSS"
      intro="Atuação em pedidos administrativos e ações judiciais para garantir aposentadorias, auxílios e benefícios assistenciais. Análise técnica de tempo de contribuição, laudos e documentos para identificar o melhor caminho para o seu caso."
      services={[
        { t: "Aposentadorias", d: "Por idade, tempo de contribuição, especial, da pessoa com deficiência e híbrida. Cálculo da melhor regra aplicável." },
        { t: "BPC / LOAS", d: "Benefício assistencial para idosos a partir de 65 anos e pessoas com deficiência em situação de vulnerabilidade." },
        { t: "Auxílios", d: "Auxílio-doença (incapacidade temporária), auxílio-acidente e aposentadoria por invalidez." },
        { t: "Pensão por morte", d: "Análise da qualidade de segurado, dependência e divisão da pensão entre dependentes." },
        { t: "Revisão de benefícios", d: "Revisão da vida toda, revisão de cálculo, conversão de tempo especial e correção de RMI." },
        { t: "Recursos e ações", d: "Recursos no CRPS e ações judiciais contra indeferimentos e suspensões indevidas." },
      ]}
      faqs={[
        { q: "Tive o benefício negado pelo INSS. Ainda posso conseguir?", a: "Sim. Indeferimentos administrativos podem ser revertidos por meio de recurso no CRPS ou por ação judicial, com base em provas técnicas e documentais." },
        { q: "Quem tem Direito ao BPC/LOAS?", a: "O Benefício é destinado a idosos com de 65 anos ou mais e pessoas com deficiência que atendam aos requisitos previstos em lei, incluindo critérios de renda e avaliação quando aplicável." },
        { q: "Quanto tempo demora para conseguir o benefício?", a: "O prazo pode variar conforme o tipo de benefício, a documentação apresentada e a demanda do INSS." },
      ]}
    />
  ),
});
