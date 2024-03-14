import { FloatingNav } from "@/components/UI/NavigationHeader";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sobre o Autor",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contato",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <header className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </header>
  );
};

export default Header;
