"use client";
import { FullModal } from "@/components/UI/Modal/FullModal";
import { RefObject, useRef, useState } from "react";

export const VideoFrame = () => {
  const [isOpenVideo, setIsOpenVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className={`flex w-full items-center justify-center py-12`}>
      <figure className={`relative`}>
        <div
          className={`absolute inset-0 z-20 rounded-2xl bg-black/50`}
          style={{
            width: `${videoRef.current?.offsetWidth}`,
            height: `${videoRef.current?.offsetHeight}`,
          }}
        />
        <div
          className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform`}
        >
          <button onClick={() => setIsOpenVideo(true)} className="button">
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="26px"
            >
              <path
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <video
          ref={videoRef as RefObject<HTMLVideoElement>}
          src="/videos/chamada-livro.mp4"
          className={` h-[197px] w-[350px] overflow-hidden rounded-2xl xs:h-[225px] xs:w-[400px] sm:h-[281px] sm:w-[500px] md:h-[365px] md:w-[650px] lg:h-[506px] lg:w-[900px] xl:h-[607px] xl:w-[1080px]`}
          controls
        >
          Seu Navegador não suporta videos
        </video>
      </figure>
      <FullModal isOpen={isOpenVideo} setIsOpen={setIsOpenVideo}>
        <section className={`flex h-full w-full items-center justify-center`}>
          <video
            src="/videos/chamada-livro.mp4"
            className={` h-[197px] w-[350px] overflow-hidden rounded-2xl xs:h-[225px] xs:w-[400px] sm:h-[281px] sm:w-[500px] md:h-[365px] md:w-[650px] lg:h-[506px] lg:w-[900px] xl:h-[607px] xl:w-[1080px]`}
            controls
            autoPlay
          >
            Seu Navegador não suporta videos
          </video>
        </section>
      </FullModal>
    </section>
  );
};
