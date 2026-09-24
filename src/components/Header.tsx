"use client";

import { useState } from "react";
import {
  Cat,
  Gamepad2,
  Menu,
  X,
  Swords,
  Shield,
  Compass,
  Brain,
  type LucideIcon,
} from "lucide-react";

interface GeneroItem {
  nombre: string;
  href: string;
  icon: LucideIcon;
}

const GENEROS: GeneroItem[] = [
  { nombre: "Acción", href: "#accion", icon: Swords },
  { nombre: "RPG", href: "#rpg", icon: Shield },
  { nombre: "Aventura", href: "#aventura", icon: Compass },
  { nombre: "Estrategia", href: "#estrategia", icon: Brain },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  const toggleMenu = () => setMenuAbierto((prev) => !prev);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-purple-500/20 text-neutral-200 transition-all font-sans">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-60 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">

          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            aria-label="Ir al inicio de Cat Game"
          >
            <div className="relative flex items-center justify-center p-2.5 bg-neutral-900 rounded-xl border border-neutral-800 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Cat className="w-6 h-6 text-purple-400 group-hover:animate-pulse transition-transform duration-300 group-hover:scale-105" />
              <Gamepad2 className="w-3.5 h-3.5 text-pink-500 absolute -bottom-1 -right-1 bg-neutral-950 rounded-full p-0.5 border border-neutral-800" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500 uppercase">
                Cat Game
              </span>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center gap-1.5 lg:gap-2"
            aria-label="Navegación por categorías de juegos"
          >
            {GENEROS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white bg-neutral-900/40 hover:bg-neutral-900 border border-transparent hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                >
                  <Icon className="w-4 h-4 text-purple-400 transition-colors group-hover:text-pink-400" />
                  <span>{item.nombre}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 bg-neutral-900/80 rounded-xl border border-neutral-800 text-neutral-400 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 focus:outline-none cursor-pointer"
              aria-expanded={menuAbierto}
              aria-label="Abrir menú de categorías"
            >
              {menuAbierto ? (
                <X className="w-6 h-6 text-pink-400 animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-purple-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuAbierto && (
        <div className="md:hidden border-t border-neutral-800/80 bg-neutral-950/98 px-5 py-4 space-y-3 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
            <span className="w-4 h-px bg-purple-500/50"></span>
            <p>Categorías de Videojuegos</p>
            <span className="w-4 h-px bg-purple-500/50"></span>
          </div>
          
          <div className="grid grid-cols-2 gap-2.5">
            {GENEROS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={cerrarMenu}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900/70 border border-neutral-800 hover:border-purple-500/50 hover:text-white hover:bg-neutral-900 transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{item.nombre}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
