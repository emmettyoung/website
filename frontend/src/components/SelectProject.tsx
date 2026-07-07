export interface projectLayout {
    title: string;
    description: string;
    link: string;
}

export interface ProjectGridProps {
    projects: projectLayout[];
}

// TODO: add project descriptions
export const projectList: projectLayout[] = [
    { 
        title: "DecisionTree",
        description: "Decision tree project",
        link: "https://github.com/emmettyoung/DecisionTree/tree/main/pr01-eyoung18%3Afgold"
    }, 
    {
        title: "Search",
        description: "Search query project, learned to effective store and query through documents in an efficent manner",
        link: "https://github.com/emmettyoung/search-query"
    },
    {
        title: "API",
        description: "Coded a server + website for a user to view different datasets in chart and graph format",
        link: "https://github.com/emmettyoung/api-server"
    },
    {
        title: "Heuristic Search",
        description: "Implemented Search Algorithms for DFS, BFS, and IDS",
        link: "https://github.com/emmettyoung/HeuristicSearch/tree/main/heuristic-search-emmettyoung"
    },
    {
        title: "Map project",
        description: "Maps project that allows multiple users to place and clear pins (users can see each others pins) on a map. Additionally, users can search for redline data via search bar on the map",
        link: "https://github.com/emmettyoung/maps"
    },
    {
        title: "Trading Algorithm",
        description: "Trading algorithm that takes in factors of rsi, pe ratio, comparative performance over multiple time periods, and AI grading of industry and news about a stock to output recommended stocks for investment",
        link: "https://github.com/emmettyoung/TradingAlgo"
    },
    {
        title: "This website!",
        description: "My code for this website!",
        link: "https://github.com/emmettyoung/website"
    },
]

export const noncodingProjects: projectLayout[] = [
    {
        title: "The Impacts of AI",
        description: "This is a report that analyzes and compares the impacts of AI on society with the impacts of the assembly line",
        link: "https://drive.google.com/file/d/1Fi9EHADkr325yxNWyqus2Vvkl2PaRS8Y/view?usp=sharing"
    }
]

// Renders a responsive grid of bordered project cards (max 3 per row on
// desktop; see .project-grid in main.css for the column breakpoints).
export function SelectProject({ projects }: ProjectGridProps) {
    return (
        <ul className="project-grid">
            {projects.map((project) => (
                <li key={project.title} className="project-card">
                    <p className="project-card-title">{project.title}</p>
                    <p className="project-card-description">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                    >
                        {project.link.includes("github.com") ? "GitHub Repository" : "Project Link"}
                    </a>
                </li>
            ))}
        </ul>
    )
}