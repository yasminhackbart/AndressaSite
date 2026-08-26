import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake } from "lucide-react";
import { AreaPage } from "@/components/area-page";

export const Route = createFileRoute("/_site/areas/familia")({
  head: () => ({
    meta: [
      { title: "Direito de Família — Andressa Bederode Advocacia" },
      { name: "description", content: "Divórcio, guarda, pensão alimentícia, união estável, inventário e planejamento sucessório com escuta e respeito." },
      { property: "og:title", content: "Direito de Família e Sucessões" },
      { property: "og:description", content: "Divórcio, guarda, pensão, união estável, inventário e sucessões." },
      { property: "og:url", content: "/areas/familia" },
    ],
    links: [{ rel: "canonical", href: "/areas/familia" }],
  }),
  component: () => (
    <AreaPage
      eyebrow="Área de atuação"
      icon={HeartHandshake}
      title="Direito de Família —"
      highlight="cuidado em momentos sensíveis"
      intro="Atuação em causas de família com escuta atenta, sigilo e foco em soluções que preservem laços e protejam interesses, especialmente os de crianças e adolescentes."
      services={[
        { t: "Divórcio e separação", d: "Consensual ou litigioso, com ou sem partilha de bens, presencial ou por escritura pública." },
        { t: "Guarda e convivência", d: "Guarda unilateral ou compartilhada, regulamentação de convivência e alteração de guarda." },
        { t: "Pensão alimentícia", d: "Fixação, revisão, exoneração e execução de alimentos para filhos, cônjuges e idosos." },
        { t: "União estável", d: "Reconhecimento e dissolução, contrato de convivência e partilha de bens." },
        { t: "Inventário e partilha", d: "Inventário judicial e extrajudicial, sobrepartilha e cessão de direitos hereditários." },
        { t: "Planejamento sucessório", d: "Testamento, doação em vida e organização patrimonial para evitar conflitos futuros." },
      ]}
      faqs={[
        { q: "Divórcio consensual precisa de processo?", a: "Quando não há filhos menores ou incapazes e há acordo total, pode ser feito por escritura em cartório. Caso contrário, é judicial." },
        { q: "Como é definido o valor da pensão?", a: "Pelo binômio necessidade de quem recebe x possibilidade de quem paga. Reúno a documentação que comprova ambos." },
        { q: "Posso pedir a guarda compartilhada mesmo sem acordo?", a: "Sim. A guarda compartilhada é a regra no direito brasileiro, mesmo em casos de divergência entre os pais." },
      ]}
    />
  ),
});
