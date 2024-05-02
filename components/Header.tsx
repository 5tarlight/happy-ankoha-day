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
  return (
    <header className="flex justify-between px-4 items-center bg-white h-16">
      <h1 className="select-none">HAD</h1>
      <div className="flex">
        <Item text="협력진" href="/colab" />
        <Item text="전프레" href="/pre" />
        <Item text="카페 위치" href="/map" />
        <Item text="FAQ" href="/faq" />
      </div>
    </header>
  );
}
