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
      answer: `질문 감사합니다 행사 당일 기준으로 만14세 이상 받을 예정입니다. 나이 확인을 위한 신분증 검사가 있을 예정입니다.
e.g. 민증,면허증, 여권, 학생증, 청소년증, 등본, PASS앱`,
    },
    {
      question: "만 14세 이상이라면 2010년생부터 인가요?",
      answer: `네 생일이 지난 2010년생부터 입장 가능합니다
다만, 만 15세 이상 동반자와 동반 입장 시 입장 가능하게 할 예정입니다.`,
    },
    {
      question: "카페에 인형이나 키링같은 안코하 비공식 굿즈 들고 가도 될까요?",
      answer: "네 가능합니다",
    },
    {
      question: "복장 제한이 있나요?",
      answer: `코스프레 제외 복장에 따로 제한을 두진 않을 예정입니다
타인이 봤을 때 불쾌감을 조성하지 않는 정도로 생각하고 있습니다.

질문 남겨주셔서 감사합니다..`,
    },
  ];

  return (
    <div>
      <h1 className="mt-16  text-center text-3xl font-bold">Q&A</h1>
      <div className="flex justify-center">
        <div className="text-center mb-8 text-sm mt-2 max-w-[300px] w-full border-b-4 border-white pb-4">
          <div>질문은 받은 순서대로 작성하였습니다.</div>
          <div>겹치는 질문은 제외했습니다.</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[300px] flex flex-col gap-4">
          {qnaList.map((qna, idx) => (
            <QnA key={idx} question={qna.question} answer={qna.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}
