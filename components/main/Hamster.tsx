"use client";

import { ReactNode, useState } from "react";

const Hamster = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-full flex justify-center select-none">
      <span
        className="select-none hover:cursor-pointer  flex justify-center items-center content-center align-middle"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setToggle(!toggle);
        }}
      >
        {toggle ? <nav className="text-[12rem]">🐹</nav> : children}
      </span>
    </div>
  );
};

export default Hamster;
