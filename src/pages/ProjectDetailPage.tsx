import { useParams, useNavigate } from "react-router-dom";

const sehatinMockup =
  "https://www.figma.com/api/mcp/asset/2c21bb18-7647-49a1-b8c5-c5fe6d9c1809";
const skulsikMockup =
  "https://www.figma.com/api/mcp/asset/f8f551ed-7c05-4dd7-928a-7117fc60ee5a";
const serenityCover =
  "https://www.figma.com/api/mcp/asset/6992c31e-96d1-457c-90fb-615e7fd9a38c";

type Tag = { label: string };

type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  mockup: string;
  figmaLink: string;
  tags: Tag[];
  bgFrom: string;
  bgTo: string;
  motifColors: string[];
};

const projectData: Record<string, Project> = {
  sehatin: {
    id: "sehatin",
    name: "Sehatin",
    subtitle: "Mental & Physical Health Tracking App",
    description:
      "Sehatin is a mobile application designed to help teenagers monitor and improve their mental and physical well-being through mood tracking, health education, community support, and professional consultation features.",
    mockup: sehatinMockup,
    figmaLink: "https://www.figma.com/design/614d15UeZ115KA0WDWCuqy/Sehatin?node-id=332-2&t=7YWkPYvmgLgBServ-1/",
    tags: [
      { label: "Calm Visual Experience" },
      { label: "Positive Reinforcement" },
      { label: "Gamification" },
      { label: "Gratitude Journal" },
    ],
    bgFrom: "#fce4ec",
    bgTo: "#fefefa",
    motifColors: ["#2a6058", "#69b59e", "#81c784"],
  },
  skulsik: {
    id: "skulsik",
    name: "SkulSik",
    subtitle: "AI-Powered School Finder App",
    description:
      "SkulSik is a mobile application designed to help parents find suitable schools efficiently using AI-based recommendations, location-based search, and online registration features. The app also provides information about special schools (SLB) for children with disabilities, making educational access more inclusive and accessible for different needs.",
    mockup: skulsikMockup,
    figmaLink: "https://www.figma.com/design/TSTrTDIPjxHrKDtuDJEfPG/Main?node-id=605-1414&t=EUIxYb585im0l9H0-1/",
    tags: [
      { label: "Goal Oriented Experience" },
      { label: "Personalized School Discovery" },
      { label: "Inclusive Education Support" },
      { label: "Simplified Decision Making" },
      { label: "Location-Based Convenience" },
    ],
    bgFrom: "#ede7f6",
    bgTo: "#fefefa",
    motifColors: ["#3e47d1", "#ffcc00", "#64b5f6"],
  },
  serenity: {
    id: "serenity",
    name: "Serenity",
    subtitle: "Mental Health UI Kit — Mobile App",
    description:
      "Serenity is a comprehensive UI kit designed for mental health mobile applications. It provides a calming and intuitive design system with carefully chosen color palettes, typography, and components to help users navigate their mental wellness journey.",
    mockup: serenityCover,
    figmaLink: "https://www.figma.com/",
    tags: [
      { label: "Calming Design System" },
      { label: "Accessible UI" },
      { label: "Mood Tracking" },
      { label: "Mindfulness Features" },
    ],
    bgFrom: "#f3e5f5",
    bgTo: "#fefefa",
    motifColors: ["#6d5f57", "#d68f6a", "#aed581"],
  },
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#fefefa] flex flex-col items-center justify-center gap-4">
        <p className="font-poppins text-primary text-2xl">Project not found.</p>
        <button
          onClick={() => navigate("/projects")}
          className="bg-primary text-white px-6 py-2 rounded-full font-poppins hover:bg-primary/80 transition-colors"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#fefefa] flex flex-col overflow-x-hidden">
      {/* Dynamic Background Motif */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        style={{ background: `linear-gradient(135deg, ${project.bgFrom} 0%, ${project.bgTo} 100%)` }}
      >
         {/* Glowing Orbs */}
         <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[50%] h-[50%] rounded-full blur-[100px] sm:blur-[120px] animate-pulse opacity-40" style={{ backgroundColor: project.motifColors[0], animationDuration: '8s' }} />
         <div className="absolute bottom-[-10%] right-[-10%] w-[70%] sm:w-[60%] h-[60%] rounded-full blur-[120px] sm:blur-[140px] animate-pulse opacity-30" style={{ backgroundColor: project.motifColors[1], animationDuration: '10s' }} />
         <div className="absolute top-[40%] left-[60%] w-[40%] sm:w-[30%] h-[30%] rounded-full blur-[60px] sm:blur-[80px] animate-pulse opacity-40" style={{ backgroundColor: project.motifColors[2], animationDuration: '6s' }} />

         {/* Abstract Shapes (SVG Motifs) */}
         <svg className="absolute top-[10%] right-[5%] sm:right-[10%] w-48 h-48 sm:w-64 sm:h-64 opacity-[0.15] transform rotate-45 animate-[spin_40s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
           <path fill={project.motifColors[0]} d="M45,-76.3C58.3,-69.3,69.1,-55.3,77.5,-40.4C85.9,-25.5,91.8,-9.6,90.4,5.6C89,20.8,80.3,35.4,70,48.2C59.7,61,47.8,72,33.5,78.8C19.2,85.6,2.5,88.2,-13.2,85.5C-28.9,82.8,-43.6,74.8,-56.3,63.9C-69,53,-79.7,39.2,-85.5,23.3C-91.3,7.4,-92.2,-10.6,-86,-25.8C-79.8,-41,-66.5,-53.4,-51.7,-61C-36.9,-68.6,-20.6,-71.4,-3.2,-67.2C14.2,-63,31.7,-83.3,45,-76.3Z" transform="translate(100 100)" />
         </svg>

         <svg className="absolute bottom-[5%] left-[-5%] sm:left-[5%] w-40 h-40 sm:w-48 sm:h-48 opacity-[0.15] animate-[spin_30s_linear_infinite_reverse]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
           <path fill={project.motifColors[1]} d="M37.6,-66.2C49.8,-59.6,61.6,-51.2,71,-40C80.4,-28.8,87.4,-14.4,87.6,0.1C87.8,14.6,81.2,29.2,71.5,40.4C61.8,51.6,49.1,59.4,35.8,66.8C22.5,74.2,8.6,81.2,-5.7,80C-20,78.8,-34.7,69.4,-47.5,59.3C-60.3,49.2,-71.2,38.4,-77.7,25.3C-84.2,12.2,-86.3,-3.2,-82.1,-17.1C-77.9,-31,-67.4,-43.4,-54.6,-49.9C-41.8,-56.4,-26.7,-57,-12.9,-54.2C0.9,-51.4,14.7,-45.2,25.4,-72.8L37.6,-66.2Z" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10 flex flex-col flex-1 w-full">
        {/* Back button */}
        <button
          onClick={() => navigate("/projects")}
          className="flex items-center gap-2 bg-[#fefefa]/80 backdrop-blur-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-primary font-poppins font-medium mb-6 sm:mb-8 hover:bg-white hover:gap-3 transition-all group w-fit shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/50 animate-fade-in-right"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </button>

        {/* Content grid */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center lg:items-start pb-12 w-full">
          {/* Left: Info */}
          <div className="lg:col-span-7 flex flex-col gap-6 bg-[#fefefa]/70 backdrop-blur-2xl p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/80 w-full animate-fade-in-up">
            <div>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1e1e1e] mb-3 leading-tight tracking-tight drop-shadow-sm">
                {project.name}
                <span className="block font-poppins font-medium text-lg sm:text-xl lg:text-2xl text-primary/80 mt-1 sm:mt-2" style={{ color: project.motifColors[0] }}>
                  {project.subtitle}
                </span>
              </h1>
              <p className="font-poppins text-[rgba(30,30,30,0.85)] text-sm sm:text-base lg:text-lg leading-relaxed mt-4 sm:mt-6">
                {project.description}
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="bg-white/80 backdrop-blur-sm border border-primary/10 text-primary font-poppins font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all cursor-default"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Figma link */}
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-white font-poppins font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-primary/90 hover:scale-[1.02] hover:shadow-xl transition-all w-full sm:w-fit mt-4 sm:mt-6 text-sm sm:text-base"
            >
              View in Figma
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Right: Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full animate-fade-in-up delay-100 mt-4 lg:mt-0 lg:sticky lg:top-12">
            <div className="relative w-[85%] max-w-[280px] sm:max-w-xs lg:max-w-sm animate-[bounce_6s_ease-in-out_infinite]">
              {/* Phone frame effect */}
              <div className="bg-[#1e1e1e]/90 backdrop-blur-xl rounded-[36px] sm:rounded-[48px] p-2.5 sm:p-3.5 shadow-2xl border border-white/20 relative z-10">
                <img
                  src={project.mockup}
                  alt={`${project.name} mockup`}
                  className="w-full rounded-[26px] sm:rounded-[36px] object-cover bg-white shadow-inner"
                />
              </div>
              
              {/* Decorative dynamic circles attached to mockup */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full blur-[2px] opacity-90 z-0 animate-[pulse_4s_ease-in-out_infinite] shadow-lg" style={{ backgroundColor: project.motifColors[1] }} />
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-20 sm:w-28 h-20 sm:h-28 rounded-full blur-[2px] opacity-90 z-0 animate-[pulse_5s_ease-in-out_infinite] shadow-lg" style={{ backgroundColor: project.motifColors[0] }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
