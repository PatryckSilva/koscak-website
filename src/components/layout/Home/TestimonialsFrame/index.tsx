import { Button } from "@/components/UI/Buttons";
import { EbookAndPhysicalURL } from "@/utils/constants";
import { CarouselTestimonials } from "./CarouselTestimonials";

export const TestimonialsFrame = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center border-b border-t border-[#191A1F] py-10 xl:flex-row xl:justify-end xl:gap-24 xl:py-24">
      <article className="flex w-[300px] flex-col items-center justify-center gap-5 md:w-auto xl:ml-10 xl:w-[550px] xl:items-start xl:justify-start">
        <h4 className="text-center text-[26px] font-light text-white md:text-3xl xl:text-left xl:text-[45px] xl:!leading-[55px]">
          O que dizem nossos clientes
        </h4>

        <span className="w-[350px] text-center text-base text-[#BCC6D0] md:text-lg xl:text-left">
          Empresas que confiam e indicam a eficiência e qualidade do nosso
          trabalho
        </span>

        <section className={`flex items-center gap-4`}>
          <Button url={EbookAndPhysicalURL}>Compre já!</Button>
        </section>
      </article>
      <CarouselTestimonials />

      <section className={`flex items-center gap-4 md:hidden`}>
        <Button url={EbookAndPhysicalURL}>Compre já!</Button>
      </section>
    </section>
  );
};
