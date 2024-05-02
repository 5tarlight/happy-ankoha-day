"use client";

import { useState } from "react";

export default function DetailDropdown() {
  const [isDown, setIsDown] = useState(false);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

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
          <img
            onClick={() => setImg1(!img1)}
            className="mt-4"
            src={
              img1
                ? "/img/dropdown/dropdown1-2.png"
                : "/img/dropdown/dropdown2.png"
            }
          />
          <div className="mt-[-0.5rem] text-center">
            {img1 ? `" 칭찬받았다♪ "` : `" 드디어 웃어 줬어. "`}
          </div>
          <img
            onClick={() => setImg2(!img2)}
            className="mt-4"
            src={
              img2
                ? "/img/dropdown/dropdown2-2.png"
                : "/img/dropdown/dropdown1.png"
            }
          />
          <div className="mt-[-0.5rem] text-center">
            " 우리 둘만의 숨은 피니로 하자! "
          </div>
          <img
            onClick={() => setImg3(!img3)}
            className="mt-4"
            src={
              img3
                ? "/img/dropdown/dropdown3-2.png"
                : "/img/dropdown/dropdown3.png"
            }
          />
          <div className="mt-[-0.5rem] text-center">
            {img3 ? `" 내가 지켜 줄게 "` : ``}
          </div>
        </div>
      )}
    </div>
  );
}
