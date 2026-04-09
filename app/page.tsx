// import Dock from "@/components/Dock";
// import Welcome from "@/components/Welcome";
import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Welcome, Dock} from "@/components";

import TerminalWindow from "@/windows/Terminal";
import SafariWindow from "@/windows/Safari";
gsap.registerPlugin(Draggable);

const page = () => {
  return (
    <main>
      <Welcome />
      <Dock />
      <TerminalWindow />
      <SafariWindow/>
    </main>
  );
};

export default page;
