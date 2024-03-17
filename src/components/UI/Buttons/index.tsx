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
    <button onClick={() => open(url)} className={`main_btn`}>
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
    <button onClick={() => open(url)} className={`main_btn_outlined`}>
      {children}
    </button>
  );
};
