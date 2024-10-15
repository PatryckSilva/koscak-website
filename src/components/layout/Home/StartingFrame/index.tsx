import Image from "next/image";
import { Tbook } from "@/@types";
import { Button, ButtonOutlined } from "@/components/UI/Buttons";
import Link from "next/link";

const StartingFrame = ({ book }: { book: Tbook }) => {
  const { description, title, image, link } = book;
  return (
    <main className="relative flex min-h-dvh w-full flex-col-reverse items-center justify-center gap-9 bg-white py-20 bg-grid-small-black/[0.2] dark:bg-slate-950 dark:bg-grid-small-white/[0.2] md:min-h-[47rem] md:flex-col md:py-24 lg:flex-row xl:gap-56">
      <article
        className={`flex flex-col items-center gap-5 md:max-w-[580px] lg:items-start`}
      >
        <h1
          className={`text_shadow hidden text-center  text-2xl font-bold uppercase text-main_yellow-400/80 md:block md:text-left md:text-4xl`}
        >
          {title}
        </h1>

        <section
          className={`flex w-[320px] flex-col gap-4 text-left text-sm leading-7 md:w-[530px] md:text-lg`}
        >
          {description}
        </section>

        <section className={`flex items-center gap-4`}>
          {link.physical && (
            <Link href={`${link?.physical}`}>
              <Button>Compre o livro físico</Button>
            </Link>
          )}

          {link.ebook && (
            <Link href={`${link?.ebook}`}>
              <ButtonOutlined>Compre o Ebook</ButtonOutlined>
            </Link>
          )}
        </section>
      </article>

      <figure className="relative z-[2] h-[283px] w-[200px] shadow-lg shadow-[#1e1d1d] md:h-[428px] md:w-[303px]">
        <Image src={`${image}`} alt={`Capa do livro ${title}`} fill={true} />
      </figure>

      <h1
        className={`text_shadow text-center  text-2xl  font-bold uppercase text-main_yellow-400/80 md:hidden md:text-left md:text-4xl`}
      >
        {title}
      </h1>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)] dark:bg-black xl:[mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]" />
    </main>
  );
};

export default StartingFrame;
