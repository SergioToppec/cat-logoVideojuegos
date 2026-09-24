import Header from "@/components/Header";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#111111] text-zinc-100 font-sans">
      <Header />
      <main className="flex-1">
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}
