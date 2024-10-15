import { Tbook } from "@/@types";
import IncentivationBar from "@/components/layout/Home/IncentivationBar";
import { PolitcaText } from "@/components/layout/Home/Politica";
import StartingFrame from "@/components/layout/Home/StartingFrame";
import { TestimonialsFrame } from "@/components/layout/Home/TestimonialsFrame";
import { VideoFrame } from "@/components/layout/Home/VideoFrame";
import { bookLinks } from "@/utils/constants";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Welcome to your Next.js site!",
};

const Home: NextPage = () => {
  const book: Tbook = {
    id: 0,
    title: "O Homem que Odiava a Verdade",
    description: (
      <>
        <span>
          Paulo Isidoro Koscak cria uma narrativa intrigante e emocionante, onde
          somos inseridos em uma frenética investigação policial por diferentes
          regiões de São Paulo.
        </span>
        <span>
          Vamos entrando no mundo dos personagens e curiosos por quais caminhos
          serão apresentados aos nossos heróis.
        </span>
      </>
    ),
    link: {
      ebook: bookLinks.firstBook.ebook,
      both: bookLinks.firstBook.both,
      physical: bookLinks.firstBook.physical,
    },
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
export default Home;
