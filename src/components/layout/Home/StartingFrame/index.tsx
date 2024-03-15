import { Button, ButtonOutlined } from "@/components/UI/Buttons";
import { Spotlight } from "@/components/UI/Spotlight";
import { EbookUrl, physicalBookUrl } from "@/utils/constants";
import Image from "next/image";
const StartingFrame = () => {
  return (
    <main className="h-[51rem] w-full dark:bg-slate-950 bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center gap-56">
      {/* <Spotlight className="-top-40 -right-[90rem] md:-top-40 " fill="white" /> */}
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}

      <article className={`max-w-[580px] flex flex-col gap-6`}>
        <h1
          className={`uppercase text-5xl text-main_yellow/80 leading-relaxed font-bold`}
        >
          O Homem que Odiava a Verdade
        </h1>
        <section className={`w-[530px]`}>
          <span className={`flex flex-col gap-2  leading-7`}>
            <span className={`text-lg font-medium`}>
              Paulo Isidoro Koscak cria uma narrativa intrigante e emocionante,
              onde somos inseridos em uma frenética investigação policial por
              diferentes regiões de São Paulo.{" "}
            </span>
            <span className={`text-lg font-medium`}>
              Vamos entrando no mundo dos personagens e curiosos por quais
              caminhos serão apresentados aos nossos heróis.
            </span>
          </span>
        </section>
        <section className={`flex items-center gap-4`}>
          <Button url={physicalBookUrl}>Compre o livro físico</Button>
          <ButtonOutlined url={EbookUrl}>Compre o Ebook</ButtonOutlined>
        </section>
      </article>
      <figure className="relative w-[302px] h-[427px] lg:w-[380px] lg:h-[537px] z-[2]">
        <Image
          src="/images/book.webp"
          alt="Next.js Logo"
          fill={true}
          className={`rounded-lg`}
        />
      </figure>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
    </main>
  );
};

export default StartingFrame;
