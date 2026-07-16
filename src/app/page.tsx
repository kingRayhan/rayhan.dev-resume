import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl lg:grid lg:grid-cols-[320px_1fr]">
      <Sidebar />
      <MainContent />
    </div>
  );
}
