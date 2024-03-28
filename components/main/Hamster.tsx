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
        {toggle ? (
          <div className="w-full h-full">
            <nav className="text-[6rem] text-center">🐹</nav>
            <span>절대 햄스터를 클릭하지 마시오</span>
          </div>
        ) : (
          children
        )}
      </span>
    </div>
  );
};

export default Hamster;
