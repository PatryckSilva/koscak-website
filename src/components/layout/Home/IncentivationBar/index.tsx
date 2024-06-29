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
    <div className="z-10 -mt-10 mb-10 flex w-1/2 flex-col items-center justify-center gap-8 rounded-2xl bg-main_blue-950/80 p-5 md:max-h-[125px] md:w-4/5 md:flex-row md:bg-main_yellow-400/80 lg:w-[60%] xl:-mt-16 xl:w-[50%] 2xl:w-[40%]">
      {icons.map(item => (
        <div key={item.id}>
          <AnimatedTooltip item={item} />
          <span className={`text-center text-base text-[#ecf0f1] md:hidden`}>
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IncentivationBar;
