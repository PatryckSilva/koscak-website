"use client";
import { DATA_TESTIMONIALS } from "./data";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import useTestimonialFrame from "./model";

export const CarouselTestimonials = () => {
  const { emblaRef, onNextButtonClick, onPrevButtonClick } =
    useTestimonialFrame();

  const duplicatingData = DATA_TESTIMONIALS.concat(DATA_TESTIMONIALS);
  return (
    <section className="shadow_over_testimonials ">
      <section className="embla !relative">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {duplicatingData.map(item => (
              <div
                className={`embla__slide flex flex-[0_0_90%] justify-center xs:flex-[0_0_83%] md:!flex-[0_0_50%] lg:!flex-[0_0_40%] 2xl:!flex-[0_0_32%]`}
                key={item.id}
              >
                <CarouselCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`absolute top-1/2 flex w-full items-center justify-between`}
        >
          <CarouselLeftArrow onPrevButtonClick={onPrevButtonClick} />
          <CarouselRightArrow onNextButtonClick={onNextButtonClick} />
        </div>
      </section>
    </section>
  );
};

const CarouselLeftArrow = ({
  onPrevButtonClick,
}: {
  onPrevButtonClick: () => void;
}) => {
  return (
    <button
      onClick={onPrevButtonClick}
      className={` absolute !z-[99] rounded-full text-[#acadb9] transition-all active:translate-y-2 active:bg-white/20`}
    >
      <MdOutlineKeyboardArrowLeft size={40} />
    </button>
  );
};
const CarouselRightArrow = ({
  onNextButtonClick,
}: {
  onNextButtonClick: () => void;
}) => {
  const position = `right-0`;
  return (
    <button
      onClick={onNextButtonClick}
      className={`absolute !z-[99] rounded-full text-[#acadb9] transition-all active:translate-y-2 active:bg-white/20 ${position} mt-0.5`}
    >
      <MdOutlineKeyboardArrowRight size={40} />
    </button>
  );
};

const CarouselCard = ({ item }: any) => {
  return (
    <div
      key={item.id}
      className={`flex h-[350px] w-[350px] flex-col items-start justify-start gap-5 rounded-2xl bg-main_blue-950/80 p-5 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]`}
    >
      <div className={`flex items-center gap-2`}>
        <figure className={`relative size-12 overflow-hidden rounded-full`}>
          <Image alt={item.nome} src={item.photo} width={48} height={48} />
        </figure>
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
  );
};
