"use client";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

export const Button = (
  { children, className, ...props }: ComponentPropsWithoutRef<"button">,
  fn: (url: string) => void,
) => {
  return (
    <button
      // onClick={() => open(url)}
      className={cn(
        "rounded-md border-2 border-transparent bg-main_yellow-400/80 px-3 py-2 font-semibold text-slate-950 transition-all hover:bg-main_yellow-400/70 active:scale-90  md:px-4",
        className,
      )}
      onClick={() => fn}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonOutlined = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button className={cn("main_btn_outlined", className)} {...props}>
      {children}
    </button>
  );
};

export const ClickMeButton = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"button">): JSX.Element => {
  return (
    <div className="item button-parrot">
      <button className={`button_clickme`}>
        {children}
        <div className="parrot"></div>
        <div className="parrot"></div>
        <div className="parrot"></div>
        <div className="parrot"></div>
        <div className="parrot"></div>
        <div className="parrot"></div>
      </button>
    </div>
  );
};
