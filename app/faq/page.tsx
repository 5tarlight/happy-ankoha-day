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
      question: "",
      answer: "답변1",
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
