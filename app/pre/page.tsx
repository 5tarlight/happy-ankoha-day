import Prestige, { PrestigeObject } from "@/components/Prestige";

export default function Pre() {
  const pres: PrestigeObject[] = [
    {
      image: "/img/draw/sat.png",
    },
    {
      image: "/img/draw/sun.png",
    },
  ];

  const draws: PrestigeObject[] = [
    {
      image: "/img/draw/lucky1.png",
    },
    {
      image: "/img/draw/lucky2.png",
    },
  ];

  const specials: PrestigeObject[] = [
    {
      image: "/img/draw/event1.png",
    },
    {
      image: "/img/draw/event2.png",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[500px] flex flex-col">
        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8 mx-4">
            전프레
          </h2>
          <div className="w-full flex flex-col gap-8 items-center">
            {pres.map((pre, idx) => (
              <div key={idx} className="w-[320px] h-[320px]">
                <Prestige {...pre} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8 mx-4">
            럭키 드로우
          </h2>

          <div className="w-full flex flex-col gap-8 items-center">
            {draws.map((draw, idx) => (
              <div key={idx} className="w-[300px] h-[320px]">
                <Prestige {...draw} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl text-center mt-16 pb-4 border-b-[4px] border-white mb-8 mx-4">
            특전
          </h2>

          <div className="w-full flex flex-col gap-4 items-center mb-16">
            {specials.map((special, idx) => (
              <div key={idx} className="w-[320px] h-[530px]">
                <Prestige {...special} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
