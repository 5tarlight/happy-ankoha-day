import { ReactNode } from "react";

export default function SepTitle({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white w-[80%] max-w-[500px] mb-8">
        {title}
      </h2>
      <div className="flex flex-wrap w-[80%] max-w-[500px]">{children}</div>
    </div>
  );
}
