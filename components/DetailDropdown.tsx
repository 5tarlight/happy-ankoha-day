"use client";

import { useState } from "react";

export default function DetailDropdown() {
  const [isDown, setIsDown] = useState(false);

  return (
    <div className="w-[300px] mt-16">
      <div className="hover:cursor-pointer" onClick={() => setIsDown(!isDown)}>
        <div className="w-full flex h-[350px] justify-between">
          <img src="/img/ann.webp" alt="ann" className="" />
          <img src="/img/kohane.webp" alt="kohane" />
        </div>
        <div className="text-center mt-4">{isDown ? "접기" : "펼치기"}</div>
      </div>
      {isDown && (
        <div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </div>
      )}
    </div>
  );
}
