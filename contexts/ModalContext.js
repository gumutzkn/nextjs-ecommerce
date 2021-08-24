import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isResponsiveModalOpen, setIsResponsiveModalOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    document.body.classList.remove("blur");
  }

  function openModal() {
    setIsOpen(true);
    document.body.classList.add("blur");
  }
  function toggleResponsiveModal() {
    setIsResponsiveModalOpen((prevState) => !prevState);
  }

  const value = {
    isOpen,
    setIsOpen,
    openModal,
    closeModal,
    isResponsiveModalOpen,
    setIsResponsiveModalOpen,
    toggleResponsiveModal,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
