"use client";
import { Button, ButtonOutlined } from "@/components/UI/Buttons";
import { bookLinks } from "@/utils/constants";

export const TestimonialsFrameButtons = () => {
  return (
    <section className={` xl:self-end`}>
      <Button onClick={() => open(bookLinks.firstBook.both)}>Compre já</Button>
    </section>
  );
};
