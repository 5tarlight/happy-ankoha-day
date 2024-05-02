export default function Home() {
  const gradient =
    "linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, " +
    "rgba(250,225,255,1) 31%, rgba(234,229,255,1) 37%, rgba(234,244,255,1) 44%, " +
    "rgba(237,255,242,1) 49%, rgba(249,255,241,1) 55%, rgba(255,244,222,1) 62%, " +
    "rgba(255,244,236,1) 68%, rgba(255,233,233,1) 75%, rgba(255,255,255,1) 100%)";

  return (
    <div>
      <div
        className="w-full flex justify-center flex-col items-center bg-white pb-12"
        // style={{ background: gradient }}
        style={{
          backgroundImage: 'url("/img/bg/blue_bg.png")',
          backgroundSize: "cover",
        }}
      >
        <div className="text-3xl font-bold mt-16 select-none">
          <div>Happy</div> <span className="ann">An</span>
          <span className="kohane">Koha</span> Day!
        </div>
        <div className="mt-4">2024. 12. 28 ~ 29.</div>
      </div>
    </div>
  );
}
