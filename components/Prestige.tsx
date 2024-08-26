import MockImage from "./MockImage";

export interface PrestigeObject {
  image: string | "mock";
  title?: string;
  description?: string;
  author?: string;
}

export default function Prestige({
  image,
  author,
  description,
  title,
}: PrestigeObject) {
  return (
    <div className="w-full h-full p-4 bg-gray-600 bg-opacity-0 hover:bg-opacity-30 transition-all rounded-lg cursor-pointer">
      <div className="w-full h-[300px]">
        {image === "mock" ? (
          <MockImage />
        ) : (
          <img src={image} alt={title} className="w-full rounded-lg" />
        )}
      </div>
      <div className="font-bold text-center mt-6">{title}</div>
    </div>
  );
}
