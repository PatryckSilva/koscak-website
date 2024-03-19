"use client";
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
export const CarouselTestimonials = () => {
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
    <section className="shadow_over_testimonials ">
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
                  numberOfSlides: 2.3,
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
                  numberOfSlides: 2.4,
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
            className={`flex h-[350px] w-[350px] flex-col items-start justify-start gap-5 rounded-2xl bg-main_blue-950/80 p-5 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]`}
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
  );
};
const CarouselLeftArrow = () => {
  const position = ``;
  return (
    <button
      className={` absolute !z-[99] rounded-full text-[#acadb9] transition-all active:translate-y-2 active:bg-white/20`}
    >
      <MdOutlineKeyboardArrowLeft size={40} />
    </button>
  );
};
const CarouselRightArrow = () => {
  const position = `right-0`;
  return (
    <button
      className={`absolute !z-[99] rounded-full text-[#acadb9] transition-all active:translate-y-2 active:bg-white/20 ${position} mt-0.5`}
    >
      <MdOutlineKeyboardArrowRight size={40} />
    </button>
  );
};
