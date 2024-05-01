import ColabList from "@/components/ColabList";
import Footer from "@/components/Footer";
import SepTitle from "@/components/SepTitle";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <SepTitle title="협력진">
        <ColabList />
      </SepTitle>
      <SepTitle title="전프레">
        <div />
      </SepTitle>
      <SepTitle title="오시는 길">
        <div />
      </SepTitle>

      <Footer />
    </div>
  );
}
