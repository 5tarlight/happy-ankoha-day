"use client";

import { useState } from "react";

export default function DetailDropdown() {
  const [isDown, setIsDown] = useState(false);

  return (
    <div className="w-[300px] mt-16">
      <div className="hover:cursor-pointer" onClick={() => setIsDown(!isDown)}>
        <div className="w-full flex h-[350px] justify-between">
          <img
            src="/img/ann.webp"
            alt="ann"
            className=""
            style={{
              animationName: "fadeLeftIn",
              animationDuration: "1s",
            }}
          />
          <img
            src="/img/kohane.webp"
            alt="kohane"
            style={{
              animationName: "fadeRightIn",
              animationDuration: "1s",
            }}
          />
        </div>
        <div className="text-center mt-4">{isDown ? "접기" : "펼치기"}</div>
      </div>
      {isDown && (
        <div
          style={{
            animationName: "fadeDownIn",
            animationDuration: "0.5s",
          }}
          className="gap-4 flex flex-col"
        >
          <img className="mt-4" src="/img/dropdown/dropdown1.png" />
          <div className="mt-[-1rem] text-center">
            " 우리 둘만의 숨은 피니로 하자! "
          </div>
        </div>
      )}
    </div>
  );
}
