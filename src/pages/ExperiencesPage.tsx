import Navbar from "../components/Navbar";

const bgArt =
  "https://www.figma.com/api/mcp/asset/0a7acb15-c152-473f-a54f-a644f8f0e1bf";
const companyLogo =
  "https://www.figma.com/api/mcp/asset/9c318c12-1f27-43d6-a739-174dc7475ec5";

const experiences = [
  {
    id: 1,
    title: "Research Assistant",
    company: "Telkom University",
    period: "2025 - Present",
    description: [
      "Assisted in a lecturer led research project focused on evaluating the usability of the “Jatim Bissa” job portal for people with disabilities.",
      "Conducted usability testing sessions directly with users at the East Java Department of Manpower (Disnaker Jatim).",
      "Applied usability evaluation methods including Task Scenario Testing, Extra Cognitive Load (ECL), and System Usability Scale (SUS).",
      "Analyzed user behavior and feedback to identify usability issues.",
    ],
    skills: [
      "Usability Testing",
      "UX Research",
      "System Usability Scale",
      "UX Evaluation",
      "Accessibility",
    ],
    logo: companyLogo,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Competition Participant",
    period: "2024 – 2025",
    description: [
      "Participated in two national-level UI/UX competitions focused on solving real world problems",
      "Designed a mobile application for school discovery featuring school search, location based recommendations, comparison tools, maps integration, and 3D school previews",
      "Developed a mobile application concept focused on adolescent mental health monitoring and emotional well being.",
      "Created wireframes and interactive prototypes using Figma while applying usability and user-centered design principles.",
    ],
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "User Centered Design",
    ],
    logo: companyLogo,
  },
  {
    id: 3,
    title: "Event Division",
    company: "UKM CODER Telkom University",
    period: "2024 - 2025",
    description: [
      "Contributed to WAOW Season 5 workshop activities focused on Golang and React JS learning programs.",
      "Designed website slicing tasks and interface layouts using Figma to support frontend development practices.",
      "Collaborated with event teams to prepare technical learning materials and workshop activities.",
    ],
    skills: ["Figma", "UI Design", "Prototyping", "Website Design"],
    logo: companyLogo,
  },
  {
    id: 4,
    title: "Trainee Programmer",
    company: "PT Dimata Sora Jayate",
    period: "Des 2021 – Jun 2022",
    description: [
      "Worked as a Frontend Developer intern in a team-based environment, focusing on mobile application development using Flutter and Dart while gaining hands-on experience in cross-platform development and UI/UX implementation.",
      "Collaborated with team members to translate design concepts into functional application features.",
      "Developed responsive and user-friendly interfaces for mobile applications.",
      "Strengthened understanding of frontend development workflows and UI implementation practices.",
    ],
    skills: [
      "Flutter",
      "Dart",
      "UI Implementation",
      "Mobile App Dev",
      "Front End Dev",
      "Team Collaboration",
    ],
    logo: companyLogo,
  },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#fefefa]">
      {/* Painted background */}
      <div className="absolute inset-0 pointer-events-none animate-fade-in">
        <img src={bgArt} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-6 lg:py-8">
        {/* Navbar */}
        <div className="mb-8 lg:mb-12 w-fit animate-fade-in-right relative z-[100]">
          <Navbar />
        </div>

        {/* Experience cards */}
        <div className="flex flex-col gap-6 lg:gap-8 pb-12">
          {experiences.map((exp, idx) => {
            const delayClass =
              idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : "delay-300";
            return (
              <div
                key={exp.id}
                className={`group bg-[#fefefa]/90 backdrop-blur-md rounded-[28px] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 sm:p-8 flex flex-col gap-4 animate-fade-in-up hover:-translate-y-1.5 transition-all duration-500 border border-white/60 ${delayClass}`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 lg:gap-8 items-start">
                  <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-2xl overflow-hidden flex-shrink-0 bg-white shadow-inner border border-gray-100">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-[22px] sm:text-[26px] text-[#1e1e1e] group-hover:text-primary transition-colors duration-300">
                      {exp.title}{" "}
                      <span className="opacity-60 font-semibold text-[18px] sm:text-[22px] block sm:inline mt-1 sm:mt-0">
                        — {exp.company}
                      </span>
                    </h3>
                    <p className="font-poppins text-primary font-semibold text-[13px] sm:text-[15px] tracking-wide mb-4 sm:mb-5 mt-1 sm:mt-2 uppercase opacity-90">
                      {exp.period}
                    </p>
                    <ul className="space-y-2.5 font-poppins text-[rgba(30,30,30,0.85)] text-[14px] sm:text-base leading-relaxed list-disc list-outside ml-4 sm:ml-5 marker:text-primary/70">
                      {exp.description.map((line, i) => (
                        <li key={i} className="pl-1 sm:pl-2">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-4 sm:mt-2 sm:ml-[164px] lg:ml-[172px]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-primary/20 bg-primary/5 text-primary font-poppins font-medium text-[12px] sm:text-[14px] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-primary hover:text-white hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
