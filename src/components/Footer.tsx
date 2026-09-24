import { Cat, Gamepad2 } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
);

const Twitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /></svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-300 overflow-hidden border-t border-purple-500/30 font-sans">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8 z-10">

        <div className="flex flex-col items-center gap-3 group cursor-default">
          <div className="relative flex items-center justify-center p-4 bg-neutral-900 rounded-2xl border border-neutral-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <Cat className="w-10 h-10 text-purple-400 group-hover:animate-pulse" />
            <Gamepad2 className="w-5 h-5 text-pink-500 absolute -bottom-2 -right-2 bg-neutral-950 rounded-full p-0.5 border border-neutral-800" />
          </div>
          <span className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500 uppercase">
            Cat Game
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-neutral-500 uppercase">
          <span className="w-8 h-px bg-neutral-800"></span>
          <p>Nivel Completado • Presiona Start</p>
          <span className="w-8 h-px bg-neutral-800"></span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: Twitch, label: "Twitch", hoverColor: "hover:text-purple-400 hover:border-purple-400/50" },
            { icon: Youtube, label: "YouTube", hoverColor: "hover:text-red-500 hover:border-red-500/50" },
            { icon: Twitter, label: "Twitter", hoverColor: "hover:text-blue-400 hover:border-blue-400/50" },
            { icon: Github, label: "GitHub", hoverColor: "hover:text-white hover:border-white/50" },
          ].map((Social, index) => (
            <a
              key={index}
              href="#"
              aria-label={Social.label}
              className={`p-3 bg-neutral-900/50 rounded-xl border border-neutral-800/80 transition-all duration-300 hover:-translate-y-1 text-neutral-400 backdrop-blur-sm ${Social.hoverColor}`}
            >
              <Social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="w-full max-w-md h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent"></div>
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-neutral-600 font-medium">
          <span>&copy; {new Date().getFullYear()} Cat Game Games.</span>
          <span className="hidden sm:inline text-neutral-800">|</span>
          <span>Todos los derechos reservados.</span>
        </div>

      </div>
    </footer>
  );
}