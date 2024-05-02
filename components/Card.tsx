import { ReactNode } from "react";

export default function Card({
  children,
  img,
  bgColor,
  highlight,
  reverse = false,
}: {
  children: ReactNode;
  img: string;
  bgColor: string;
  highlight: string;
  reverse?: boolean;
}) {
  return (
    <div
      className="max-w-[300px] w-full h-[400px] p-4 rounded-lg flex justify-between"
      style={{ backgroundColor: bgColor }}
    >
      {reverse ? (
        <div className="max-w-[50px]">{children}</div>
      ) : (
        <div>
          <img src={img} alt="img" className="h-[350px]" />
        </div>
      )}

      {reverse ? (
        <div>
          <img src={img} alt="img" className="h-[350px]" />
        </div>
      ) : (
        <div className="max-w-[120px]">{children}</div>
      )}
    </div>
  );
}
