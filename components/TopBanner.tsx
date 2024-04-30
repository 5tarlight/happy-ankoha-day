export default function TopBanner() {
  const gradient =
    "linear-gradient(157deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, " +
    "rgba(250,225,255,1) 31%, rgba(234,229,255,1) 37%, rgba(234,244,255,1) 44%, " +
    "rgba(237,255,242,1) 49%, rgba(249,255,241,1) 55%, rgba(255,244,222,1) 62%, " +
    "rgba(255,244,236,1) 68%, rgba(255,233,233,1) 75%, rgba(255,255,255,1) 100%)";

  return (
    <div
      className="w-full h-48 flex justify-center bg-red-200 items-center"
      style={{ background: gradient, opacity: 0.7 }}
    >
      <h1 className="font-bold text-2xl">
        Happy <p className="ann inline">An</p>
        <p className="kohane inline">Koha</p> Day!
      </h1>
    </div>
  );
}
