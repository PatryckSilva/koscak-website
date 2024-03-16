"use client";

import { ReactNode } from "react";

export const Button = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  return (
    <button
      onClick={() => open(url)}
      className={`bg-main_yellow-400/80 rounded-md border-2 border-transparent px-3 py-2 font-semibold text-slate-950 transition-all hover:bg-main_yellow/70 active:scale-90 md:px-4`}
    >
      {children}
    </button>
  );
};

export const ButtonOutlined = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  return (
    <button
      onClick={() => open(url)}
      className={`border-main_yellow-400 text-main_yellow-400 active:bg-main_yellow-400/80 rounded-md border-2 bg-slate-950 px-3 py-2 transition-all active:scale-90 active:text-white md:px-4`}
    >
      {children}
    </button>
  );
};
