"use client";
import { Button } from "@/components/UI/Buttons";
import { EbookAndPhysicalURL } from "@/utils/constants";

import { DATA_TESTIMONIALS } from "./data";
import Image from "next/image";
import { arrowsPlugin, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import dynamic from "next/dynamic";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), {
  ssr: false,
});

export const TestimonialsFrame = () => {
  const arrowOptions = {
    resolve: arrowsPlugin,
    options: {
      arrowLeft: <CarouselLeftArrow />,
      arrowLeftDisabled: <></>,
      arrowRight: <CarouselRightArrow />,
      arrowRightDisabled: <></>,
      addArrowClickHandler: true,
    },
  };
  return (
    <section className="flex flex-col items-center justify-center border-b border-t border-[#191A1F] py-10 xl:flex-row xl:justify-end xl:gap-24 xl:py-24">
      <article className="flex w-[300px] flex-col items-center justify-center gap-5 md:w-auto xl:ml-10 xl:w-[550px] xl:items-start xl:justify-start">
        <h4 className="text-center text-[26px] font-light uppercase text-white md:text-3xl xl:text-left xl:text-4xl xl:!leading-[55px]">
          Mais de 380 livros vendidos!
        </h4>

        <span className="w-[350px] text-center text-base text-[#BCC6D0] md:text-lg xl:text-left">
          O que os leitores estão compartilhando sobre a magia e o impacto desta
          história
        </span>

        <section className={`flex items-end gap-4 self-end`}>
          <Button url={EbookAndPhysicalURL}>Compre já!</Button>
        </section>
      </article>
      <section className="shadow_over_testimonials -mt-0 md:mt-0">
        <Carousel
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
            arrowOptions,
            "infinite",
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            768: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1024: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2.5,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1279: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2.7,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1280: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1439: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2.2,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1500: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1600: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2.7,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
            1920: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
                arrowOptions,
                "infinite",
              ],
            },
          }}
        >
          {DATA_TESTIMONIALS.map(item => (
            <div
              key={item.id}
              className={`flex h-[350px] w-[350px] flex-col items-start justify-start gap-5 rounded-2xl bg-main_blue-950 p-5 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]`}
            >
              <div className={`flex items-center gap-2`}>
                <aside
                  className={`relative h-12 w-12 overflow-hidden rounded-full`}
                >
                  <Image
                    src={item.photo}
                    alt={item.nome}
                    objectFit={"contain"}
                    layout={"fill"}
                  />
                </aside>
                <aside className={`flex flex-col items-start`}>
                  <span className={`font-bold text-white`}>{item.nome}</span>
                </aside>
              </div>
              <span
                className={`h-[174px] text-[#cfdae4] ${item.id === 0 ? "text-xs" : "text-sm"}`}
              >
                {item.depoimento}
              </span>
            </div>
          ))}
        </Carousel>
      </section>

      <section className={`flex items-end gap-4 self-end md:hidden`}>
        <Button url={EbookAndPhysicalURL}>Compre já!</Button>
      </section>
    </section>
  );
};
const CarouselLeftArrow = () => {
  const position = ``;
  return (
    <button
      className={` transition_time absolute !z-[99] active:translate-y-2 ${position}`}
    >
      <MdOutlineKeyboardArrowLeft color="#82838A" size={40} />
    </button>
  );
};
const CarouselRightArrow = () => {
  const position = `right-0`;
  return (
    <button
      className={` transition_time absolute !z-[99] active:translate-y-2 ${position}`}
    >
      <MdOutlineKeyboardArrowRight color="#82838A" size={40} />
    </button>
  );
};
