import gsap from "gsap";

import { Welcome, Dock } from "@/components";

import TerminalWindow from "@/windows/Terminal";
import SafariWindow from "@/windows/Safari";
import ResumeWindow from "@/windows/Resume";
import Finder from "@/windows/Finder";
import { TxtFile, ImgFile, Contact } from "@/windows";
import Home from "@/components/Home";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <Finder />
      <TxtFile />
      <ImgFile />
      <Contact />
      <Home />
    </main>
  );
};

export default page;
