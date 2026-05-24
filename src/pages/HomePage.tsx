import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "about me", to: "/about" },
  { label: "introduction", to: "/about" },
  { label: "contact", to: "/about#contact" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        {/* Folder container */}
        <div className="relative">
          {/* Folder tab */}
          <div className="flex gap-0 mb-[-2px] relative z-10 pl-6">
            <div
              className="bg-[#f7e96e] text-black font-inter font-medium text-xl sm:text-2xl px-8 py-3 cursor-pointer hover:bg-[#f5e040] transition-colors"
              style={{
                clipPath: "polygon(0 100%, 0 20%, 6% 0, 94% 0, 100% 20%, 100% 100%)",
                minWidth: "180px",
                textAlign: "center",
              }}
              onClick={() => navigate("/about")}
            >
              about me
            </div>
          </div>

          {/* Folder body */}
          <div className="bg-[#f7e96e] rounded-tr-2xl rounded-b-2xl min-h-[400px] sm:min-h-[500px] p-8 sm:p-12 shadow-lg relative overflow-hidden">
            {/* Decorative lines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
              <div
                className="absolute border-t-2 border-[#d4c800]"
                style={{ width: "80%", top: "30%", left: "10%", transform: "rotate(12deg)" }}
              />
              <div
                className="absolute border-t-2 border-[#d4c800]"
                style={{ width: "80%", top: "50%", left: "10%", transform: "rotate(-8deg)" }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
              {/* Left: placeholder image */}
              <div
                className="w-48 h-48 sm:w-64 sm:h-64 bg-[#d9d9d9] rounded-lg flex-shrink-0 cursor-pointer hover:bg-[#c8c8c8] transition-colors"
                onClick={() => navigate("/about")}
              />

              {/* Right: navigation links */}
              <div className="flex flex-col gap-6 pt-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => navigate(tab.to)}
                    className="font-inter font-medium text-2xl sm:text-3xl text-black hover:text-gray-600 transition-colors text-left"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-inter text-gray-400 text-center mt-6 text-sm">
          Portfolio of Vivi Intan Sari — UI/UX Designer
        </p>
      </div>
    </div>
  );
}
