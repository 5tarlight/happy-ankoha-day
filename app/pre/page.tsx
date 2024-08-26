import Prestige, { PrestigeObject } from "@/components/Prestige";

export default function Pre() {
  const pres: PrestigeObject[] = [
    {
      image: "mock",
      title: "Test1",
    },
    {
      image: "mock",
      title: "Test2",
      description: "때론 설명이 필요할 때도 있습니다.",
    },
    {
      image: "mock",
      title: "Test3",
      description: "자신의 작품을 소개해보세요.",
      author: "예작가",
    },
  ];

  const draws: PrestigeObject[] = [
    {
      image: "mock",
    },
  ];

  const specials: PrestigeObject[] = [
    {
      image: "mock",
      title: "Test5",
      author: "예작가2",
    },
    {
      image: "mock",
      title: "Test6",
      description: "때론 아무 말이 없는 게 좋을 때도 있습니다.",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[500px] px-4 flex flex-col">
        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8">
            전프레
          </h2>
          <div className="w-full flex flex-col gap-4 items-center">
            {pres.map((pre, idx) => (
              <div key={idx} className="w-[300px] h-[450px]">
                <Prestige {...pre} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8">
            럭키 드로우
          </h2>

          <div className="w-full flex flex-col gap-4 items-center">
            {draws.map((draw, idx) => (
              <div key={idx} className="w-[300px] h-[450px]">
                <Prestige {...draw} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8">
            특전
          </h2>

          <div className="w-full flex flex-col gap-4 items-center">
            {specials.map((special, idx) => (
              <div key={idx} className="w-[300px] h-[450px]">
                <Prestige {...special} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
