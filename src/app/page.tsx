import Header from "@/components/Header";
import Galeria from "@/components/Galeria";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}
