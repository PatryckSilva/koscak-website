import { Button, ButtonOutlined } from "@/components/UI/Buttons";
import { EbookUrl, physicalBookUrl } from "@/utils/constants";
import Image from "next/image";
const StartingFrame = () => {
  return (
    <main className="relative flex min-h-dvh w-full flex-col-reverse items-center justify-center gap-9 bg-white py-20 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2] md:min-h-[47rem] md:flex-col md:py-24 lg:flex-row xl:gap-56">
      {/* <Spotlight className="-top-40 -right-[90rem] md:-top-40 " fill="white" /> */}
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}

      <article
        className={`flex flex-col items-center gap-5 md:max-w-[580px] lg:items-start`}
      >
        <h1
          className={` text_shadow text-main_yellow-400/80 text-nowrap text-center text-[22px] font-bold uppercase md:text-left md:text-4xl`}
        >
          O Homem que Odiava a Verdade
        </h1>
        <section
          className={`flex w-[320px] flex-col gap-4 text-center text-sm leading-7 md:w-[530px] md:text-lg lg:text-left`}
        >
          <span>
            Paulo Isidoro Koscak cria uma narrativa intrigante e emocionante,
            onde somos inseridos em uma frenética investigação policial por
            diferentes regiões de São Paulo.{" "}
          </span>
          <span>
            Vamos entrando no mundo dos personagens e curiosos por quais
            caminhos serão apresentados aos nossos heróis.
          </span>
        </section>
        <section className={`flex items-center gap-4`}>
          <Button url={physicalBookUrl}>Compre o livro físico</Button>
          <ButtonOutlined url={EbookUrl}>Compre o Ebook</ButtonOutlined>
        </section>
      </article>
      <figure className="relative z-[2] h-[283px] w-[200px] shadow-lg shadow-[#1e1d1d] md:h-[428px] md:w-[303px]">
        <Image src="/images/book.webp" alt="Next.js Logo" fill={true} />
      </figure>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)] dark:bg-black xl:[mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
    </main>
  );
};

export default StartingFrame;
