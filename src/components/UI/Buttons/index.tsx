"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";

type Tbutton = ComponentProps<"button"> & { children: ReactNode };

export const Button = ({ children, className, ...props }: Tbutton) => {
  return (
    <button
      className={cn(
        "rounded-md border-2 border-transparent bg-main_yellow-400/80 px-3 py-2 font-semibold text-slate-950 transition-all hover:bg-main_yellow-400/70 active:scale-90  md:px-4",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonOutlined = ({ children, className, ...props }: Tbutton) => {
  return (
    <button className={cn("main_btn_outlined", className)} {...props}>
      {children}
    </button>
  );
};
