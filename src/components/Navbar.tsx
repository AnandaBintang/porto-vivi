import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "About me" },
  { to: "/experiences", label: "Experiences" },
  { to: "/projects", label: "My project" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  const activeLink = links.find((l) =>
    l.to === "/"
      ? currentPath === "/" || currentPath === "/about"
      : currentPath.startsWith(l.to)
  );
  const activeLabel = activeLink ? activeLink.label : "About me";

  const getLinkClass = (to: string, isActive: boolean) => {
    const isActuallyActive =
      isActive ||
      (to === "/" && (currentPath === "/" || currentPath === "/about"));
    return `rounded-full px-4 py-2 font-poppins transition-colors sm:px-4 sm:py-2 sm:text-[15px] lg:text-[16px] xl:text-[18px] ${
      isActuallyActive
        ? "bg-primary font-semibold text-white"
        : "text-primary hover:bg-primary/5"
    }`;
  };

  return (
    <nav className="relative z-50 shrink-0">
      {/* Pill nav — visible from sm up */}
      <div className="hidden items-center justify-between gap-1 rounded-full bg-[#fefefa]/90 backdrop-blur-md px-1.5 py-1.5 sm:flex sm:min-w-[280px] lg:min-w-[340px] shadow-sm border border-white/50">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => getLinkClass(link.to, isActive)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Compact mobile */}
      <div className="flex items-center justify-between gap-3 rounded-full bg-[#fefefa]/95 backdrop-blur-md px-4 py-2 sm:hidden shadow-sm border border-white/50 cursor-pointer" onClick={() => setOpen(!open)}>
        <span className="font-poppins text-[14px] font-semibold text-primary">
          {activeLabel}
        </span>
        <button
          type="button"
          className="text-primary focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="size-5 transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 flex flex-col gap-1 rounded-[20px] bg-[#fefefa]/95 backdrop-blur-xl p-2 shadow-xl sm:hidden min-w-[160px] border border-white/60 animate-fade-in-up origin-top">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `block text-center text-[14px] ${getLinkClass(link.to, isActive)}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
