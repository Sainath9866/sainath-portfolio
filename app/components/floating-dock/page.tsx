import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconCode,
  IconBrandLinkedin,
  IconFolder,
} from "@tabler/icons-react";

function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full   duration-200 " />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full  transition-colors duration-200 " />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconCode className="h-full w-full  transition-colors duration-200 " />
      ),
      href: "#techstack",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full  transition-colors duration-200 " />
      ),
      href: "https://www.linkedin.com/in/sainath-reddy-705089253/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full  transition-colors duration-200 " />
      ),
      href: "https://x.com/saizbuilds",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full  transition-colors duration-200 " />
      ),
      href: "https://github.com/sainath9866",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full pb-6 z-50">
      <div className="bg-black/90 backdrop-blur-sm rounded-full border-2  shadow-2xl px-4 py-2 ">
        <FloatingDock items={links} />
      </div>
    </div>
  );
}

export default FloatingDockDemo;
