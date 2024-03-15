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
      className={`bg-main_yellow/80 border-2 border-transparent hover:bg-main_yellow/70 text-white px-4 py-2 rounded-md transition-all active:scale-90`}
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
      className={`bg-slate-950 border-2 border-main_yellow text-main_yellow px-4 py-2 rounded-md transition-all active:scale-90 active:bg-main_yellow/80 active:text-white`}
    >
      {children}
    </button>
  );
};
