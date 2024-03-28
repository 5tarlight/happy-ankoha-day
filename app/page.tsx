import AnnCard from "@/components/main/AnnCard";
import Hamster from "@/components/main/Hamster";
import KohaneCard from "@/components/main/KohaneCard";

export default function Home() {
  return (
    <div>
      <div className="h-8" />
      <Hamster>
        <KohaneCard />
      </Hamster>
      <Hamster>
        <AnnCard />
      </Hamster>
    </div>
  );
}
