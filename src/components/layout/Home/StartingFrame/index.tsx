import Image from "next/image";
export const StartingFrame = () => {
  return (
    <main className="flex w-screen min-h-screen justify-evenly items-center p-24 bg-main_blue">
      <article>
        <h1 className={`uppercase`}>
          Mais de 380 livros vendidos! Compre já o seu!
        </h1>
      </article>
      <figure className="">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </figure>
    </main>
  );
};
