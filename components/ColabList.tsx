export default function ColabList() {
  type Help = { name: string; handle: string } | "anonymous";

  const colabs: Help[] = [
    { name: "鲸#", handle: "Rexxxxder" },
    { name: "진미", handle: "cocov__" },
    { name: "망개", handle: "manggaeaw" },
    { name: "카비", handle: "kar_be_" },
    { name: "크림", handle: "pskpream" },
    { name: "도묘", handle: "m_2__o" },
    { name: "무맛", handle: "mumat_39" },
    { name: "물", handle: "plantprsk_8978" },
    { name: "백강", handle: "lilyburglar" },
    { name: "안뇽", handle: "annyong__hi" },
    { name: "☁️", handle: "cl0o0ud__" },
    { name: "241", handle: "241_BLGL" },
    { name: "군밤", handle: "yakiguri_04" },
    { name: "D", handle: "d_ddyy_" },
    { name: "쥬얌", handle: "jyam_prsk" },
    { name: "마뇨끼", handle: "manyokki1" },
    { name: "리네", handle: "Ririne86656822" },
    { name: "백미러", handle: "backmileo20" },
    { name: "^ㅅ^", handle: "emimhok" },
    { name: "햄도리", handle: "haemdoli1" },
    { name: "독녀", handle: "somesppp" },
    { name: "메멩", handle: "7412365b" },
    { name: "り", handle: "R1_S0U" },
    { name: "와뉴뉴", handle: "wa_new2" },
    { name: "쏙독새", handle: "potoo42potoo" },
    { name: "햄복", handle: "ham_star_vivid" },
    { name: "묘롱", handle: "ryum_PSK" },
    { name: "팡히", handle: "AKTU_JMT" },
    { name: "적상", handle: "Zeoksang" },
    { name: "べる", handle: "Beru_popooo" },
    { name: "mk🥞☕", handle: "mk_aktu" },
    "anonymous",
    "anonymous",
    "anonymous",
    "anonymous",
  ];

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-wrap justify-between">
        {colabs.map((help, i) => {
          const inner = (
            <div
              className="h-[70px] w-[130px] flex items-center justify-center gap-4 rounded-2xl hover:cursor-pointer mb-4"
              key={i}
            >
              <div className="opacity-100 text-center">
                {help === "anonymous" ? (
                  "익명"
                ) : (
                  <>
                    <div className="font-bold">{help.name}</div>
                    <div>{`@${help.handle}`}</div>
                  </>
                )}
              </div>
            </div>
          );

          if (help === "anonymous") return inner;
          else
            return (
              <a
                href={`https://twitter.com/${help.handle}`}
                target="_blank"
                rel="noreferrer"
                key={i}
              >
                {inner}
              </a>
            );
        })}
      </div>
      <div className="text-gray-600 text-sm mt-8">
        협력진 목록은 변경될 수 있습니다.
      </div>
    </div>
  );
}
