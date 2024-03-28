const KohaneCard = () => {
  return (
    <div className="bg-[#feadc8] w-[20rem] h-[10rem] rounded-lg flex justify-between p-1">
      <div>
        <img src="/img/kohane.webp" alt="kohane" className="h-[9.5rem]" />
      </div>
      <div className="w-64 flex flex-col">
        <div className="text-sm text-white w-full h-[7rem] flex text-center items-center">
          "나는 아직 많이 부족하지만... 그렇다고 해도, 안짱과 함께 최고의
          이벤트를 목표로 하고 싶어! 그러니까 더는 헤매지 않아!"
        </div>
        <div className="w-full h-12 text-[#FF679A] text-right pr-6 text-[1.5rem] font-bold">
          小豆沢 こはね
        </div>
      </div>
    </div>
  );
};

export default KohaneCard;
