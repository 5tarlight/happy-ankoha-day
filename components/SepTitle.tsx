export default function SepTitle({ title }: { title: string }) {
  type Help = { name: string; handle: string; href: string };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white w-[60%]">
        {title}
      </h2>
      <div className="flex flex-wrap w-[60%]"></div>
    </div>
  );
}
