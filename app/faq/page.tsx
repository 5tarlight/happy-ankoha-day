function QnA({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <div className="font-bold flex">
        <div className="mr-1">Q.</div>
        <div> {question}</div>
      </div>
      <div className="text-wrap flex">
        <div className="mr-1">A. </div>
        <div>
          {answer.split("\n").map((v, i) => (
            <div key={i}>{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function () {
  const qnaList = [
    {
      question:
        "혹시 나이제한 있나요? 있다면 몇년생부터 입장 가능인가요? 또 나이 인증 방법이 있나요?",
      answer: `행사 당일 기준으로 만 14세 이상만 받을 예정입니다. 나이 확인을 위한 신분증 검사가 있을 예정입니다.
e.g. 민증,면허증, 여권, 학생증, 청소년증, 등본, PASS앱`,
    },
    {
      question: "만 14세 이상이라면 2010년생부터 인가요?",
      answer: `네 생일이 지난 2010년생부터 입장 가능합니다.
다만, 만 15세 이상 동반자와 동반 입장 시 입장 가능하게 할 예정입니다.`,
    },
    {
      question: "카페에 인형이나 키링같은 안코하 비공식 굿즈 들고 가도 될까요?",
      answer: "네 가능합니다.",
    },
    {
      question: "복장 제한이 있나요?",
      answer: `코스프레 제외 복장에 따로 제한을 두진 않을 예정입니다.
타인이 봤을 때 불쾌감을 조성하지 않는 정도로 생각하고 있습니다.`,
    },
    {
      question: "입장은 예약인가요?",
      answer:
        "아직까진 예약제는 생각하고 있지 않으나 추후에 변경될 가능성이 있습니다.",
    },
    {
      question: "카페에서 판매할 예정된 메뉴같은 게 있나요?",
      answer: "쿠키는 확정이며, 음료의 경우 아직 정해지지 않았습니다.",
    },
    {
      question: "현장 스태프 모집 하실건가요??",
      answer: "현재까진 따로 없습니다.",
    },
    {
      question: "1인 1메뉴 필수 인가요?",
      answer: "네 필수입니다.",
    },
    {
      question: "통판 예정 있으실까요?",
      answer: `통판의 경우 현재 예정은 없으나 추후 상황에 따라 변동 가능성 있습니다.`,
    },
    {
      question:
        "카페에 안코하 이외의 굿즈(ex 보컬로이드 투명 포카) 등을 가져가도 될까요?",
      answer: "네 괜찮습니다.",
    },
    {
      question: "협력 신청 작업물 업로드의 경우 타장르 그림도 가능할까요?",
      answer: "네 가능합니다 편하게 폼 넣어주세요.",
    },
    {
      question:
        "타 생카 주최진이 안코하 카페 주최진에게 선물 드리면 받아 드리실까요?",
      answer: "행사 당일날 주시는거면 감사히 받겠습니다.",
    },
    {
      question: "협력진 나이제한 있을까요?",
      answer: "아니요 없습니다.",
    },
    {
      question: "성별 제한 있나요?",
      answer: "아니요 없습니다.",
    },
    {
      question: "혹시 빠른인데, 가능할까요?",
      answer: "저희 안코하 카페는 게임 규제 나이인 15세(만14세)를 고려하여 만14세 미만은 카페 이용이 어렵다고 안내하였습니다만, 최대한 많은 분들이 이용하시길 바라는 취지에서 세는 나이 15세(10년생) 이상의 입장을 도와드리려합니다.",
    },
    {
      question: "혹시 드레스코드가 있을까요?",
      answer: "파란색 분홍색으로 있을 예정입니다!",
    },
    {
      question: "안녕하세요! 카페 몇시부터 몇시까지 진행하실 예정인지 여쭙고 싶습니다~!",
      answer: "토요일 11시-19시 일요일 11시-18시 예정이오나, 확정은 아니니 참고만 해주세요! 추후 정확하게 공지 올리겠습니다.",
    },
    
  ];

  return (
    <div>
      <h1 className="mt-16  text-center text-3xl font-bold">Q&A</h1>
      <div className="flex justify-center">
        <div className="text-center mb-8 text-sm mt-2 max-w-[300px] w-full border-b-4 border-white pb-4">
          <div>질문은 받은 순서대로 정리하였습니다.</div>
          <div>중복되는 질문은 제외했습니다.</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[300px] flex flex-col gap-12">
          {qnaList.map((qna, idx) => (
            <QnA key={idx} question={qna.question} answer={qna.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
