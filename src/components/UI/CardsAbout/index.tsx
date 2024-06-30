"use client";
import { cn } from "@/lib/utils";
import { useWidth } from "@/utils/responsiveHook";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const CardsAbout = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    picture: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <div
      className={cn(
        "grid grid-cols-1 place-content-center gap-4 py-8 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          target="_blank"
          key={item?.link}
          className="group relative block h-max w-full max-w-[320px] p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          // onMouseLeave={() => setHoveredIndex(0)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
            <span className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8] lg:hidden" />
          </AnimatePresence>
          <Card>
            <section className={`flex flex-col items-center gap-4 text-center`}>
              <figure
                className={`relative h-[120px] w-[120px] overflow-hidden rounded-full`}
              >
                <Image alt={item.title} src={item.picture} fill={true} />
              </figure>

              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </section>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden rounded-2xl border-2 border-transparent bg-slate-950/95 p-4 shadow-sm shadow-slate-700 group-hover:border-slate-700 ",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("text-sm leading-relaxed text-zinc-400", className)}>
      {children}
    </span>
  );
};
