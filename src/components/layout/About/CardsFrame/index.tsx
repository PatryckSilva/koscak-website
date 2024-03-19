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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae at ea maiores architecto rerum voluptates dignissimos sunt maxime suscipit quae ut deserunt, enim quo porro minima! Quam, quod nostrum.",
    link: "https://www.youtube.com/koscakera",
    picture: "/images/about/escritor.webp",
  },
  {
    title: "Canal Caramelo Total",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae at ea maiores architecto rerum voluptates dignissimos sunt maxime suscipit quae ut deserunt, enim quo porro minima! Quam, quod nostrum.",
    link: "https://www.youtube.com/caramelototal",
    picture: "/images/about/caramelo_total.webp",
  },
  {
    title: "Comediante",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae at ea maiores architecto rerum voluptates dignissimos sunt maxime suscipit quae ut deserunt, enim quo porro minima! Quam, quod nostrum.",
    link: "https://www.instagram.com/koscakera",
    picture: "/images/about/comediante.webp",
  },
];
