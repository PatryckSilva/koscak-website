import { FloatingNav } from "@/components/UI/NavigationHeader";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const Header = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Sobre o Autor",
      link: "/about?message=teste",
      icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contato",
      link: "/contact",
      icon: (
        <IconMessage className="h-5 w-5 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <header className=" w-full">
      <FloatingNav navItems={navItems} />
    </header>
  );
};

export default Header;
