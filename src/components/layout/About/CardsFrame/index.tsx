import { CardsAbout } from "@/components/UI/CardsAbout";

export function CardsFrame() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <CardsAbout items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Escritor",
    description:
      "Paulo é um talentoso escritor, criador de narrativas envolventes e emocionantes. Seus livros combinam mistério e intriga, transportando os leitores para mundos fascinantes e cheios de reviravoltas. Com uma escrita cativante, ele conquista um público ávido por histórias bem construídas e personagens memoráveis.",
    link: "https://www.youtube.com/koscakera",
    picture: "/images/about/escritor.webp",
  },
  {
    title: "Comediante",
    description:
      "Paulo é um comediante dinâmico que encanta plateias com seu humor afiado e observações do cotidiano. Em suas apresentações de stand-up, ele aborda temas variados com uma perspectiva única e divertida. Com carisma e presença de palco, ele garante risadas e momentos inesquecíveis para seu público.",
    link: "https://www.instagram.com/koscakera",
    picture: "/images/about/comediante.webp",
  },
  {
    title: "Canal Caramelo Total",
    description:
      "É um canal voltado para comédia e inclui apresentações de stand-up. Ele combina humor com situações do dia a dia, trazendo conteúdo divertido e espontâneo. O canal oferece uma mistura de esquetes cômicas e performances ao vivo, destacando o talento de Paulo como comediante.",
    link: "https://www.youtube.com/caramelototal",
    picture: "/images/about/caramelo_total.webp",
  },
];
