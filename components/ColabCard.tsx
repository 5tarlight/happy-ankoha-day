export default function ColabCard({
  name,
  handle,
}: {
  name: string;
  handle: string;
}) {
  return (
    <div
      className={
        "w-full px-6 py-8 hover:bg-gray-100 " +
        "transition-[background-color] duration-150 ease-in-out "
      }
      style={{
        border: "3px solid white",
        borderRadius: "10px",
      }}
    >
      <div className="font-extrabold">{name}</div>
      <div>@{handle}</div>
    </div>
  );
}
