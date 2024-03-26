import Link from "next/link";

const Header = () => {
  const gradient = `linear-gradient(90deg, rgba(0,187,220,1) 0%, rgba(255,103,154,1) 100%)`;

  return (
    <header
      style={{ background: gradient }}
      className="bg-yellow-200 h-16 flex w-full content-center text-center align-middle items-center justify-center text-white"
    >
      <div className="flex max-w-[1024px] justify-between w-full">
        <h1 className="select-none hover:cursor-pointer font-bold text-[1.2rem]">
          <Link href="/">Happy Ankoha Day</Link>
        </h1>
        <div className="flex">
          <div className="mr-4 hover:cursor-pointer hover:underline">
            카페 위치
          </div>
          <div className="hover:cursor-pointer hover:underline">
            전프레 소개
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
