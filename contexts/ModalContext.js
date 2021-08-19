import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    document.body.classList.remove("blur");
  }

  function openModal() {
    setIsOpen(true);
    document.body.classList.add("blur");
  }

  const value = {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
