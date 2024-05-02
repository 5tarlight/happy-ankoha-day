import Link from "next/link";

function Item({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href}>
      <div className="hover:bg-gray-200 p-2 rounded-md hover:cursor-pointer select-none">
        {text}
      </div>
    </Link>
  );
}

export default function Header() {
  const shadow = `
  0px 0.2px 1.2px rgba(0, 0, 0, 0.006),
  0px 0.5px 2.7px rgba(0, 0, 0, 0.009),
  0px 0.9px 4.6px rgba(0, 0, 0, 0.011),
  0px 1.4px 6.9px rgba(0, 0, 0, 0.013),
  0px 2px 10px rgba(0, 0, 0, 0.015),
  0px 2.8px 14.2px rgba(0, 0, 0, 0.017),
  0px 4px 20.1px rgba(0, 0, 0, 0.019),
  0px 5.8px 29.2px rgba(0, 0, 0, 0.021),
  0px 9px 45px rgba(0, 0, 0, 0.024),
  0px 16px 80px rgba(0, 0, 0, 0.03)`;

  return (
    <header
      className="flex justify-between px-4 items-center bg-white h-16"
      style={{ boxShadow: shadow }}
    >
      <Link href="/">
        <h1 className="select-none">
          <img src="/img/logo.png" className="h-[40px]" />
        </h1>
      </Link>
      <div className="flex">
        <Item text="협력진" href="/colab" />
        <Item text="전프레" href="/pre" />
        <Item text="카페 위치" href="/map" />
        <Item text="FAQ" href="/faq" />
      </div>
    </header>
  );
}
