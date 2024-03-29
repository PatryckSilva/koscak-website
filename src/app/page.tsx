import IncentivationBar from "@/components/layout/Home/IncentivationBar";
import { PolitcaText } from "@/components/layout/Home/Politica";
import StartingFrame from "@/components/layout/Home/StartingFrame";
import { TestimonialsFrame } from "@/components/layout/Home/TestimonialsFrame";
import { VideoFrame } from "@/components/layout/Home/VideoFrame";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Welcome to your Next.js site!",
};

const Home: NextPage = () => {
  return (
    <>
      <StartingFrame />
      <IncentivationBar />
      <VideoFrame />
      <TestimonialsFrame />
      <PolitcaText />
    </>
  );
};
export default Home;
