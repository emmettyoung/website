import { useEffect, useRef, useState } from "react";
import { Boxes, Home, Moon, Nfc, User } from "lucide-react";
import { projectLayout } from "./SelectProject";
import { SelectProfile, profile } from "./SelectProfile";
import { HomePage, home } from "./homePage";
import { profileLinks, SelectProfileLinks } from "./SelectProfileLinks";

interface SelectProjects {
  projects: projectLayout[];
}

const Mainframe = ({ projects }: SelectProjects) => {
  // Refs for scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  })

  // Scroll to a specific section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleProjectContent = (projectName: string) => {
    setOpenProject((prev) => (prev === projectName ? null : projectName));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className="flex flex-col">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="flex flex-col space-y-8">
          <li className="sidebar-box" onClick={() => scrollToSection(homeRef)}>
            <span className="text-lg">Home</span>
          </li>
          <li className="sidebar-box" onClick={() => scrollToSection(profileRef)}>
            <span className="text-lg">Profile</span>
          </li>
          <li className="sidebar-box" onClick={() => scrollToSection(projectsRef)}>
            <span className="text-lg">Projects</span>
          </li>
          <li className="sidebar-box" onClick={() => scrollToSection(contactRef)}>
            <span className="text-lg">Contact</span>
          </li>
          <li className="sidebar-box" onClick={toggleMode}>
            <span className="text-lg">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content-container">
        {/* Home Section */}
          <div className="homepage-font">
            <HomePage welcomeText={home.welcomeText} />
          </div>

        {/* Profile Section */}
        <div ref={profileRef} className="min-h-screen py-16 profile-container">
          <ul className="profile-header">
            About Me
          </ul>
          <SelectProfile profile={profile} />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="min-h-screen py-16 project-container">
          <ul className="project-header">
            Project List
          </ul>

          {projects.map((proj) => (
            <li
              key={proj.title}
              className="project-box p-4 border-2 border-gray-600 rounded-lg bg-white shadow-md cursor-pointer"
              onClick={() => toggleProjectContent(proj.title)}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">{proj.title}</span>
              </div>
        
              {openProject === proj.title && (
                <div className="project-body mt-2 p-3 border-t border-gray-400">
                  <p>{proj.description} </p>
                  <a href={proj.link} className="text-blue-500 underline">
                    GitHub Repository
                  </a>
                </div>
              )}
            </li>))}
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="min-h-screen py-16 contact-container">
          <ul className="project-header">
            Contact Information
          </ul>
          <SelectProfileLinks profileLinks={profileLinks} />
        </div>
      </div>
    </div>
  );
};

export default Mainframe;
