import { CarouselTestimonials } from "./CarouselTestimonials";
import { TestimonialsFrameButtons } from "../HomeButtons";

export const TestimonialsFrame = () => {
  return (
    <section className="flex  w-full flex-col items-center justify-center border-b border-t border-[#191A1F] py-10 xl:flex-row xl:justify-end xl:gap-24 xl:py-24">
      <article className="flex w-[300px] flex-col items-center justify-center gap-5 md:w-auto xl:ml-10 xl:w-[550px] xl:items-start xl:justify-start">
        <h4 className="text-center text-3xl font-light uppercase text-white md:text-3xl xl:text-left xl:text-4xl xl:!leading-[55px]">
          Mais de{" "}
          <span className={`text_shadow text-main_yellow-400/80`}>380</span>{" "}
          livros{" "}
          <span className={`text_shadow text-main_yellow-400/80`}>
            vendidos!
          </span>
        </h4>

        <span className="w-[350px] text-center text-base text-[#BCC6D0] md:text-lg xl:text-left">
          O que os leitores estão compartilhando sobre a magia e o impacto desta
          história.
        </span>

        <TestimonialsFrameButtons />
      </article>
      <CarouselTestimonials />
    </section>
  );
};
