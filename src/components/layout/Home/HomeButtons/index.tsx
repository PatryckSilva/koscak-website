"use client";
import { Button, ButtonOutlined } from "@/components/UI/Buttons";
import {
  EbookAndPhysicalURL,
  EbookUrl,
  physicalBookUrl,
} from "@/utils/constants";

export const StartingFrameButtons = () => {
  return (
    <section className={`flex items-center gap-4`}>
      <Button onClick={() => open(physicalBookUrl)}>
        Compre o livro físico
      </Button>
      <ButtonOutlined onClick={() => open(EbookUrl)}>
        Compre o Ebook
      </ButtonOutlined>
    </section>
  );
};

export const TestimonialsFrameButtons = () => {
  return (
    <section className={` xl:self-end`}>
      <Button onClick={() => open(EbookAndPhysicalURL)}>Compre já</Button>
    </section>
  );
};
