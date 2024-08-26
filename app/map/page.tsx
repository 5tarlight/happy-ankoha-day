export default function CafeMap() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[500px] px-4 flex flex-col">
        <h1 className="text-center text-3xl font-bold my-16">행사 장소 공개</h1>
        <a
          href="https://naver.me/xyjykhNG"
          target="_blank"
          className="flex flex-col gap-2 justify-center"
        >
          <img
            src="/img/map/map.png"
            alt="지도"
            className="w-full rounded-lg"
          />
          <span className="flex self-center text-sm text-center text-gray-500">
            클릭해 네이버 지도로 이동하기
          </span>
        </a>
        <div className="mt-16 flex flex-col gap-4 text-center">
          <h2 className="font-bold text-lg">카페 오소</h2>
          <h3>서울 마포구 홍익로2길 19 2층</h3>
          <h3 className="mt-[-0.5rem]">2024. 12. 28 ~ 2024. 12. 29</h3>
        </div>
      </div>
    </div>
  );
}
