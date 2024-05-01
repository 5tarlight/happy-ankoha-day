import ColabList from "@/components/ColabList";
import SepTitle from "@/components/SepTitle";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <SepTitle title="협력진">
        <ColabList />
      </SepTitle>
    </div>
  );
}
