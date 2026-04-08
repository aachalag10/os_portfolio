"use client";

import React, { useRef } from "react";
import usewindowstore from "../store/window"

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows } = usewindowstore();
    const ref = useRef(null);

    const windowState = windows[windowKey] || {};
    const { isOpen = true, zIndex = 1 } = windowState;

    if (!isOpen) return null;

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;