import IncentivationBar from "@/components/layout/Home/IncentivationBar";
import { PolitcaText } from "@/components/layout/Home/Politica";
import StartingFrame from "@/components/layout/Home/StartingFrame";
import { TestimonialsFrame } from "@/components/layout/Home/TestimonialsFrame";
import { VideoFrame } from "@/components/layout/Home/VideoFrame";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Welcome to your Next.js site!",
};

const aCidadeAmanheceEmLuto: NextPage = () => {
  const book = {
    title: "A cidade amanhece em luto",
    description: (
      <>
        <span>
          Paulo Isidoro Koscak nos leva em uma intensa investigação policial em
          A Cidade Amanhece em Luto, onde o detetive Bolacha enfrenta desafios e
          intrigas em meio a uma cidade cheia de mistérios.
        </span>

        <span>
          A narrativa prende o leitor ao envolver rapidamente nos personagens e
          na trama, cheia de ação, suspense e surpresas a cada passo.
        </span>
      </>
    ),
    link: "",
    image: "/images/book.webp",
  };
  return (
    <>
      <StartingFrame book={book} />
      <IncentivationBar />
      <VideoFrame />
      <TestimonialsFrame />
      <PolitcaText />
    </>
  );
};

export default aCidadeAmanheceEmLuto;
