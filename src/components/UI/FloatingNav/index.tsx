"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { THeaderItems } from "@/@types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../dropdown-menu";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: THeaderItems[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", current => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-5 z-[500] mx-auto flex max-w-fit items-center justify-center gap-5 rounded-xl border-2 border-main_yellow-400/80 bg-white px-4 py-3 shadow-lg shadow-black/85 dark:bg-slate-950 lg:top-10",
          className,
        )}
      >
        {navItems.map((navItem, idx: number) => {
          if (!navItem.link && navItem.content) {
            return (
              <DropdownMenu key={idx}>
                <DropdownMenuTrigger className={`md:mr-2`}>
                  <span className="block text-lg sm:hidden">
                    {navItem.icon}
                  </span>
                  <span className="-mr-2 hidden sm:block">{navItem.name}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`z-[600] border-2 border-main_yellow-400/80`}
                >
                  {navItem.content.map((contentItem, contentIndex) => (
                    <Link
                      key={contentIndex}
                      href={contentItem.link}
                      className={``}
                    >
                      <DropdownMenuItem className={``}>
                        {contentItem.name}
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Link
              key={`link=${idx}`}
              href={navItem.link || ""}
              className={cn(
                "relative flex items-center  text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
              )}
            >
              <span className="block text-lg sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
