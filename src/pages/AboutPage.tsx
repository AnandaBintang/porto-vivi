import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const profileImg =
  "https://www.figma.com/api/mcp/asset/fd886144-48db-488e-a123-92f0ee81c744";
const heroBg =
  "https://www.figma.com/api/mcp/asset/0a7acb15-c152-473f-a54f-a644f8f0e1bf";
const skulsikThumb =
  "https://www.figma.com/api/mcp/asset/c65b0a35-4413-4665-807c-1f49d17b26ec";
const serenityThumb =
  "https://www.figma.com/api/mcp/asset/a6612808-9a91-4d05-8b41-2fca8827d1fa";

const linkedinIcon =
  "https://www.figma.com/api/mcp/asset/6aa3bde2-e833-4844-8bea-9661784b462e";
const emailIcon =
  "https://www.figma.com/api/mcp/asset/098cbe24-8c4d-4e64-b269-5ee134dc1f26";
const instagramIcon =
  "https://www.figma.com/api/mcp/asset/509210ec-c327-4831-8132-0a70b472e320";
const githubIcon =
  "https://www.figma.com/api/mcp/asset/d077e9e1-89fb-421e-b7dc-099cbec15679";

const aboutText =
  "Hi, I'm an Information Systems undergraduate at Telkom University who enjoys understanding users, solving problems, and creating intuitive digital experiences through UI/UX design";

const skills = [
  { label: "UI Design", color: "bg-pink-soft" },
  { label: "UX Research", color: "bg-pink-muted" },
  { label: "Team Work", color: "bg-orange-warm" },
];

const projects = [
  { name: "SkulSik", img: skulsikThumb, id: "skulsik" },
  { name: "Serenity", img: serenityThumb, id: "serenity" },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary shrink-0 w-6 h-6 lg:w-8 lg:h-8"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#fefefa] font-poppins lg:overflow-hidden flex justify-center overflow-x-hidden overflow-y-auto">
      <div className="w-full h-full max-w-[1440px] px-6 lg:px-12 xl:px-20 py-4 lg:py-6 flex flex-col animate-fade-in">

        {/* ── HERO SECTION ── */}
        <div className="relative w-full rounded-[32px] shadow-sm animate-fade-in-up shrink-0" style={{ height: "55vh", minHeight: "300px" }}>

          {/* Lukisan Background */}
          <div className="absolute inset-0 overflow-hidden rounded-[32px]">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
          </div>

          {/* ── TOP ELEMENTS (Navbar & Mobile Pill) ── */}
          <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-6 lg:top-6 lg:left-6 lg:right-0 z-30 flex items-center justify-between pointer-events-none">
            {/* Navbar */}
            <div className="pointer-events-auto shrink-0">
              <Navbar />
            </div>

            {/* Mobile Pill */}
            <div className="lg:hidden bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 text-primary shadow-sm pointer-events-auto shrink-0">
              <div className="-ml-0.5 sm:ml-0 scale-90 sm:scale-100">
                <PhoneIcon />
              </div>
              <span className="font-semibold text-[11px] sm:text-[14px] whitespace-nowrap tracking-tight">
                +62 85172034389
              </span>
            </div>
          </div>

          {/* Foto Profil */}
          <div className="absolute bottom-0 left-0 w-full z-10 h-[75%] sm:h-[80%] lg:h-[85%] xl:h-[92%] flex justify-center pointer-events-none">
            <img
              src={profileImg}
              alt="Vivi Intan Sari"
              className="h-full max-w-full w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>

          {/* Name Card */}
          <div className="absolute bottom-4 right-5 sm:right-6 lg:bottom-6 lg:right-10 z-20 text-right drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <p className="font-poppins font-bold text-white text-[16px] sm:text-[20px] xl:text-[28px] leading-tight drop-shadow-md">
              UI/UX Designer
            </p>
            <p className="font-poppins font-extrabold text-white text-[32px] sm:text-[40px] xl:text-[64px] leading-tight mt-1 drop-shadow-md">
              Vivi Intan Sari
            </p>
          </div>

          {/* ── PHONE NUMBER ── */}
          {/* Desktop Notch */}
          <div className="notch-tr hidden lg:block absolute right-0 top-0 bg-[#fefefa] z-20 w-[260px] xl:w-[22%] h-[86px]">
            <div className="absolute top-4 right-6 xl:right-8 flex items-start gap-2 xl:gap-3 text-primary">
              <div className="mt-0.5">
                <PhoneIcon />
              </div>
              <div className="flex flex-col">
                <span className="font-normal whitespace-nowrap text-[18px] xl:text-[20px]">
                  +62 85172034389
                </span>
                <span className="text-[13px] xl:text-[14px] font-light mt-0.5 opacity-80">Phone Number</span>
              </div>
            </div>
          </div>

          {/* ── NOTCH KIRI BAWAH (Hanya sebagai mask putih) ── */}
          <div className="notch-bl hidden lg:block absolute left-0 bottom-0 bg-[#fefefa] z-20 w-[320px] xl:w-[28%] h-[90px]" />
        </div>

        {/* ── BAWAH HERO (3 Kolom) ── */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-8 xl:gap-12 relative z-30 flex-1 min-h-0 mt-6 lg:-mt-[90px]">

          {/* Kiri: About Me (Naik ke notch) */}
          <div className="flex flex-col shrink-0 animate-fade-in-right lg:w-[32%] xl:w-[28%] pt-2 lg:pt-6 lg:ml-6">
            <h2 className="font-poppins font-bold text-primary text-[22px] xl:text-[28px]">
              About Me
            </h2>
            <p className="mt-2 xl:mt-3 text-primary text-[14px] xl:text-[16px] leading-[1.6] pr-2">
              {aboutText}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 xl:gap-4 mt-4 xl:mt-6">
              <a href="https://www.linkedin.com/in/vivi-intan-sari-23b839385/" target="_blank" rel="noreferrer" className="hover:-translate-y-1 transition-transform">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 xl:w-[40px] xl:h-[40px] object-contain" />
              </a>
              <a href="mailto:viviintansari2005@gmail.com" className="hover:-translate-y-1 transition-transform">
                <img src={emailIcon} alt="Email" className="w-8 h-8 xl:w-[40px] xl:h-[40px] object-contain" />
              </a>
              <a href="https://www.instagram.com/viin.ri/" target="_blank" rel="noreferrer" className="hover:-translate-y-1 transition-transform bg-[#e115bf] rounded-full p-2 flex items-center justify-center w-8 h-8 xl:w-[40px] xl:h-[40px]">
                <img src={instagramIcon} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a href="https://github.com/viviint" target="_blank" rel="noreferrer" className="hover:-translate-y-1 transition-transform">
                <img src={githubIcon} alt="GitHub" className="w-8 h-11 xl:w-[40px] xl:h-[52px] object-contain" />
              </a>
            </div>
          </div>

          {/* Tengah: Skills (Didorong turun ke bawah hero) */}
          <div className="flex-1 flex flex-col animate-fade-in-up delay-100 lg:w-[28%] xl:w-[26%] lg:pt-[110px]">
            <h2 className="font-poppins font-bold text-primary text-[22px] xl:text-[28px]">
              Skills
            </h2>
            <div className="mt-3 xl:mt-4 flex flex-wrap gap-2 xl:gap-3">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className={`${s.color} rounded-full text-white font-medium font-poppins text-[14px] xl:text-[16px] px-4 py-2 xl:px-5 xl:py-2.5 cursor-default hover:scale-105 transition-transform shadow-sm`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Kanan: Project List (Didorong turun ke bawah hero) */}
          <div className="shrink-0 flex flex-col animate-fade-in-up delay-200 lg:w-[35%] xl:w-[38%] lg:pt-[110px]">
            <h2 className="font-poppins font-bold text-primary text-[22px] xl:text-[28px]">
              Project List
            </h2>
            <div className="mt-3 xl:mt-5 flex flex-col gap-4">
              {projects.map((p) => (
                <div key={p.id} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => navigate(`/projects/${p.id}`)}
                    className="group flex w-full items-center gap-4 xl:gap-5 text-left"
                  >
                    <div className="overflow-hidden rounded-[10px] shrink-0 shadow-sm">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-[100px] h-[60px] xl:w-[130px] xl:h-[75px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="font-poppins text-primary font-medium text-[16px] xl:text-[20px]">
                      {p.name}
                    </span>
                  </button>
                  <div className="w-full h-[1.5px] bg-[#df97bd] mt-3 xl:mt-4"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
