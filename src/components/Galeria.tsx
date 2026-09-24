import Image, { type StaticImageData } from "next/image";

import portada from "@/assets/portada.png";
import accionHero from "@/assets/accion.png";
import rpgHero from "@/assets/rpg.png";
import aventuraHero from "@/assets/aventura.png";
import estrategiaHero from "@/assets/estrategia.png";

type GameCard = {
  title: string;
  subtitle: string;
  info: string;
  tone: string;
  accent: string;
};

type GenreSection = {
  id: string;
  title: string;
  hero: StaticImageData;
  description: string;
  accent: string;
  body: string;
  games: GameCard[];
};

const genres: GenreSection[] = [
  {
    id: "accion",
    title: "Juegos de Acción",
    hero: accionHero,
    description: "Combates intensos, ritmo alto y momentos memorables.",
    accent: "#ef4444",
    body: "Los juegos de acción premian los reflejos, la precisión en combate y una cadencia ininterrumpida. Esta selección reúne franquicias emblemáticas caracterizadas por su diseño cinemático, dinamismo y desafío constante.",
    games: [
      {
        title: "God of War",
        subtitle: "Acción narrativa",
        info: "Kratos y Atreus en un viaje mitológico brutal, emotivo e impecable a nivel de cámara.",
        tone: "Carmesí & Ceniza",
        accent: "#f43f5e",
      },
      {
        title: "Devil May Cry 5",
        subtitle: "Hack and slash",
        info: "Estilo puro, coreografías complejas y un techo técnico sumamente gratificante.",
        tone: "Violeta & Neón",
        accent: "#a855f7",
      },
      {
        title: "Doom Eternal",
        subtitle: "Shooter frenético",
        info: "Velocidad vertiginosa, gestión de recursos en combate y agresión calculada.",
        tone: "Rojo Fuego & Acero",
        accent: "#f97316",
      },
    ],
  },
  {
    id: "rpg",
    title: "Juegos de RPG",
    hero: rpgHero,
    description: "Progresión, mundos inmersivos y decisiones trascendentes.",
    accent: "#8b5cf6",
    body: "En el género de rol, la construcción del personaje y la profundidad del mundo son fundamentales. Estos referentes destacan por su soberbia narrativa, atmósfera y libertad de elección.",
    games: [
      {
        title: "The Witcher 3",
        subtitle: "RPG de mundo abierto",
        info: "Un universo maduro repleto de matices morales, leyendas locales y contratos inolvidables.",
        tone: "Plata & Bosque Sombrío",
        accent: "#10b981",
      },
      {
        title: "Elden Ring",
        subtitle: "Action RPG",
        info: "Misterio ambiental, descubrimiento genuino y combate metódico en un lienzo deslumbrante.",
        tone: "Oro Viejo & Obsidiana",
        accent: "#f59e0b",
      },
      {
        title: "Persona 5 Royal",
        subtitle: "JRPG estilizado",
        info: "Elegancia visual indiscutible, banda sonora magistral y un ritmo por turnos refinado.",
        tone: "Rojo Carmín & Noir",
        accent: "#ef4444",
      },
    ],
  },
  {
    id: "aventura",
    title: "Juegos de Aventura",
    hero: aventuraHero,
    description: "Exploración, curiosidad y narrativas emotivas.",
    accent: "#10b981",
    body: "La aventura invita a detenerse, contemplar y viajar a través de horizontes sugerentes. Combina misterio, resolución de entornos e historias diseñadas para resonar en el jugador.",
    games: [
      {
        title: "Zelda: Breath of the Wild",
        subtitle: "Exploración abierta",
        info: "Física interactiva y libertad total donde cada colina recompensa la iniciativa.",
        tone: "Azul Éter & Verdor",
        accent: "#0ea5e9",
      },
      {
        title: "Uncharted 4",
        subtitle: "Aventura cinemática",
        info: "Set-pieces deslumbrantes, arqueología moderna y un pulido visual sobresaliente.",
        tone: "Ámbar & Piedra Cálida",
        accent: "#f59e0b",
      },
      {
        title: "Life is Strange",
        subtitle: "Narrativa intimista",
        info: "Decisiones sensibles, viajes en el tiempo y un retrato atmosférico inolvidable.",
        tone: "Lavanda & Crepúsculo",
        accent: "#8b5cf6",
      },
    ],
  },
  {
    id: "estrategia",
    title: "Juegos de Estrategia",
    hero: estrategiaHero,
    description: "Planificación táctica, visión global y dominio de recursos.",
    accent: "#0ea5e9",
    body: "La estrategia sustituye el reflejo instantáneo por la previsión metódica. Obras diseñadas para quienes disfrutan calibrar sistemas complejos, gestionar imperios y trazar victorias a largo plazo.",
    games: [
      {
        title: "Age of Empires IV",
        subtitle: "Estrategia en tiempo real",
        info: "Economía de guerra, asedios medievales y rigor documental integrado a la jugabilidad.",
        tone: "Bronce & Azul Cobalto",
        accent: "#eab308",
      },
      {
        title: "Civilization VI",
        subtitle: "Estrategia 4X",
        info: "Desarrollo de civilizaciones desde la antigüedad hasta la era espacial paso a paso.",
        tone: "Azul Celeste & Mármol",
        accent: "#38bdf8",
      },
      {
        title: "Crusader Kings III",
        subtitle: "Gran estrategia feudal",
        info: "Diplomacia cortesana, intrigas familiares y dinastías vivas en constante tensión.",
        tone: "Verde Botella & Dorado",
        accent: "#d97706",
      },
    ],
  },
];

function GameCardItem({ game, index }: { game: GameCard; index: number }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/50">
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ backgroundColor: game.accent }}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
          <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
            0{index + 1}
          </span>
          <span
            className="inline-block h-1.5 w-1.5 rounded-full ring-2 ring-white/10"
            style={{ backgroundColor: game.accent }}
          />
        </div>

        <div className="space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            {game.subtitle}
          </span>
          <h4 className="text-lg font-bold tracking-tight text-white group-hover:text-zinc-100">
            {game.title}
          </h4>
        </div>

        <p className="text-xs leading-relaxed text-zinc-400/90">
          {game.info}
        </p>
      </div>
    </article>
  );
}

function GenreSectionItem({ genre }: { genre: GenreSection }) {
  return (
    <section id={genre.id} className="scroll-mt-12 space-y-8 pt-4">
      {/* Título de Sección con id accesible */}
      <div className="text-center space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          {genre.title}
        </h3>
        <div className="mx-auto h-[2px] w-8 rounded-full" style={{ backgroundColor: genre.accent }} />
      </div>

      {/* Hero del Género */}
      <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-2 sm:p-3">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-950">
          <Image
            src={genre.hero}
            alt={genre.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        <div className="px-3 py-5 sm:px-4 sm:py-6">
          <div className="max-w-3xl space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Sobre el género
            </h4>
            <p className="text-sm leading-relaxed text-zinc-300/90 sm:text-base">
              {genre.body}
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de referentes */}
      <div className="space-y-4">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Referentes del género
        </h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {genre.games.map((game, idx) => (
            <GameCardItem key={game.title} game={game} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Galeria() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-zinc-100 antialiased selection:bg-white/10 selection:text-white">
      <div className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
        
        <header className="space-y-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            ¿Cuáles son los Géneros de Videojuegos Más Populares?
          </h1>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-2 sm:p-3">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-950">
              <Image
                src={portada}
                alt="Portada géneros de videojuegos"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            En términos generales, cada año tiene una ligera variación en las preferencias de los jugadores.
            Sin embargo, los géneros más jugados mantienen una base constante. Esta selección sintetiza
            cuatro de las categorías más representativas y tres títulos insignia por cada una.
          </p>
        </header>

        <hr className="border-t border-white/[0.06]" />

        <div className="space-y-24">
          {genres.map((genre) => (
            <GenreSectionItem key={genre.id} genre={genre} />
          ))}
        </div>

      </div>
    </main>
  );
}