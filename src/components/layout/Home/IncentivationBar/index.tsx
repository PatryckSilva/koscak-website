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
    <div className="flex flex-row items-center bg-main_yellow/80 justify-center mb-10 -mt-16 rounded-2xl z-10 w-[40%] max-h-[125px] p-5">
      <AnimatedTooltip items={icons} />
    </div>
  );
};

export default IncentivationBar;
