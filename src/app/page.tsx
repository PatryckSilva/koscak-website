import IncentivationBar from "@/components/layout/Home/IncentivationBar";
import StartingFrame from "@/components/layout/Home/StartingFrame";
import { VideoFrame } from "@/components/layout/Home/VideoFrame";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Welcome to your Next.js site!",
};

export default function Home() {
  return (
    <>
      <StartingFrame />
      <IncentivationBar />
      <VideoFrame />
    </>
  );
}
