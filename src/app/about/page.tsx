import { CardsFrame } from "@/components/layout/About/CardsFrame";
import { Metadata, NextPage } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About",
  description: "Learn more about the author of this site!",
};

const About: NextPage = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center gap-0 bg-white py-24 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2]  md:py-24">
      <article
        className={`flex w-full max-w-5xl flex-col items-center px-8 text-center lg:items-start`}
      >
        <h1 className={`text_shadow text-4xl text-main_yellow-400/80`}>
          Sobre o Autor
        </h1>
        <span className={`text-lg text-white/80`}>
          Paulo Isidoro Koscak é escritor, roteirista e comediante stand-up
        </span>
      </article>
      <CardsFrame />
      <nav className={`flex w-full max-w-5xl justify-between`}>
        <Link
          href={"/"}
          className={`text-main_yellow-400 underline hover:text-main_yellow-400/80`}
        >
          {"<"}Voltar para página inicial
        </Link>
        <Link
          href={"/contact"}
          className={`text-main_yellow-400 underline hover:text-main_yellow-400/80`}
        >
          Entre em Contato{">"}
        </Link>
      </nav>
    </main>
  );
};

export default About;
