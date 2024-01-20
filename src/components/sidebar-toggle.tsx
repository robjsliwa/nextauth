"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export default function SidebarToggle({
  isOpen,
  onToggle,
}: SidebarToggleProps) {
  const toggleSidebar = () => {
    onToggle(!isOpen);
  };

  return (
    <button
      type="button"
      className="text-gray-500 hover:text-gray-600 lg:hidden"
      onClick={toggleSidebar}
      aria-controls="sidebar"
      aria-expanded={isOpen}
    >
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      {isOpen ? (
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
}
