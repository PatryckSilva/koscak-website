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
        {DATA_TESTIMONIALS.map((item, index) => (
          <div
            key={index}
            className={`flex h-[314px] w-[350px] flex-col items-start justify-center gap-5 rounded-[20px] bg-white px-8 py-4`}
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
                <span className={`text-sm text-[#A9B5C1]`}>{item.cargo}</span>
              </aside>
            </div>
            <span className={`text-sm text-[#A9B5C1]`}>{item.depoimento}</span>
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
