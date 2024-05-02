function QnA({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <div className="font-bold">Q. {question}</div>
      <div className="text-wrap">A. {answer}</div>
    </div>
  );
}

export default function () {
  const qnaList = [
    {
      question: "혹시 나이제한 있나요? 있다면 몇년생부터 입장 가능인가요? 또 나이 인증 방법이 있나요?",
      answer: "질문 감사합니다 행사 당일 기준으로 만14세 이상 받을 예정입니다. 나이 확인을 위한 신분증 검사가 있을 예정입니다. e.g. 민증,면허증, 여권, 학생증, 청소년증, 등본, PASS앱",
    },
    {
      question: "질문2",
      answer: "답변2",
    },
    {
      question: "질문3",
      answer: "답변3",
    },
    {
      question: "질문3",
      answer: "답변3",
    },
  ];

  return (
    <div>
      <h1 className="mt-16 mb-8 text-center text-3xl font-bold">Q&A</h1>
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
