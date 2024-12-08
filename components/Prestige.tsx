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
    <div
      className={
        "w-full h-full bg-gray-600 bg-opacity-0 rounded-lg "
        // "hover:bg-opacity-30 transition-all cursor-pointer"
      }
    >
      <div className="w-full">
        {image === "mock" ? (
          <MockImage />
        ) : (
          <img src={image} alt={title} className="w-full rounded-lg" />
        )}
      </div>
      {title && <div className="font-bold text-center mt-2">｢ {title} ｣</div>}
      {author && <div className="text-center">{author}</div>}
      {description && (
        <div className="text-center mt-2 text-gray-500 text-sm italic">
          {description}
        </div>
      )}
    </div>
  );
}
