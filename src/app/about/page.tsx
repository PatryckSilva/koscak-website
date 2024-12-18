import { CardsFrame } from "@/components/layout/About/CardsFrame";
import { Metadata, NextPage } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Sobre Paulo",
  description: "Saiba mais sobre o autor Paulo Isidoro Koscak.",
};

const About: NextPage = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center  bg-white py-24 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2]  ">
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
      <nav className={`flex w-full max-w-5xl justify-between px-5`}>
        <Link
          href={"/"}
          className={`text-main_yellow-400 underline hover:text-main_yellow-400/80`}
        >
          {"<"}Página inicial
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
