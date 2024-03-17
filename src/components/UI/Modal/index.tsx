import { Dialog } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
export const Modal = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>> | ((arg0: boolean) => void);
  children: ReactNode;
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div
        className="fixed inset-0 z-[999] bg-[#0f0f0f] opacity-80 blur-3xl"
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
        <Dialog.Panel className="fixed z-[201] md:min-w-[500px]">
          <div className="relative z-[9999] mt-8 flex h-full w-[350px] flex-col justify-center rounded-[20px] border-[2px] border-[#202123] bg-slate-950 p-5 md:w-[100%] md:p-8 ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 text-3xl "
            >
              <IoClose color="#fff" />
            </button>
            {children}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
