const Card = ({
  color,
  img,
  highlight,
  content,
  name,
}: {
  highlight: string;
  color: string;
  img: string;
  content: string;
  name: string;
}) => {
  const containerStyle = {
    backgroundColor: color,
  };
  const highlightStyle = {
    color: highlight,
  };

  return (
    <div
      className={` w-[20rem] h-[10rem] rounded-lg flex justify-between p-1 mb-8`}
      style={containerStyle}
    >
      <div>
        <img src={img} alt="kohane" className="h-[9.5rem]" />
      </div>
      <div className="w-64 flex flex-col">
        <div className="text-sm text-white w-full h-[7rem] flex text-center items-center">
          {content}
        </div>
        <div
          className={`w-full h-12 text-right pr-6 text-[1.5rem] font-bold`}
          style={highlightStyle}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Card;
