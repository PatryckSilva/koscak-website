import { FaBook } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { PiMegaphoneFill } from "react-icons/pi";
import { BiHappyAlt } from "react-icons/bi";
import { AnimatedTooltip } from "@/components/UI/AnimatedTooltip";
const IncentivationBar = () => {
  const icons = [
    {
      id: 0,
      icon: <FaBook />,
      text: "Leia em qualquer lugar",
    },
    {
      id: 1,
      icon: <FaBookOpenReader />,
      text: "Para os viciados em leitura",
    },
    {
      id: 2,
      icon: <PiMegaphoneFill />,
      text: "Conte aos amigos",
    },
    {
      id: 3,
      icon: <BiHappyAlt />,
      text: "Fique animado com sua leitura",
    },
  ];
  return (
    <div className="bg-main_yellow-400/80 z-10 -mt-10 mb-10 flex w-1/2 flex-col items-center justify-center gap-12 rounded-2xl p-5 md:max-h-[125px] md:w-4/5 md:flex-row lg:w-[60%] xl:-mt-16 xl:w-[50%] 2xl:w-[40%]">
      <AnimatedTooltip items={icons} />
    </div>
  );
};

export default IncentivationBar;
