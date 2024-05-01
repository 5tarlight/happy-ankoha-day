export default function Footer() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[80%] h-56 border-t-2 border-white mt-4 max-w-[500px] flex flex-col items-center justify-center">
        <div className="mb-2">&copy; 2024 AnKoha Day.</div>
        <div className="text-center">
          This page is not endorsed by Sega and not associated with Project
          Sekai. Project Sekai and all related titles, logos, and characters are
          trademarks of Sega.
        </div>
        <div className="text-center">
          Project Sekai &copy; Sega | Colorful Palette | Crypton Future Media{" "}
        </div>
      </div>
    </div>
  );
}
