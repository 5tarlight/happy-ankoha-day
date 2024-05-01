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
    { name: "말랑", handle: "rangrang_yee" },
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
    "anonymous",
    "anonymous",
    "anonymous",
  ];

  return (
    <div className="w-full flex flex-wrap justify-between">
      {colabs.map((help, i) => {
        const inner = (
          <div
            className="h-[70px] w-[130px] flex items-center justify-center gap-4 rounded-2xl hover:cursor-pointer"
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
  );
}