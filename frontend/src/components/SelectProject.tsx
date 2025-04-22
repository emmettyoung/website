export interface projectLayout{
    title: string;
    description: string;
    link: string;
}

export interface SelectInputProps {
    setSelectedProject: (project: projectLayout | null) => void;
    projects: projectLayout[]
  }

// TODO: add project descriptions
export const projectList: projectLayout[] = [
    { 
        title: "DecisionTree",
        description: "decision tree project",
        link: "https://github.com/emmettyoung/DecisionTree"
    }, 
    {
        title: "Search",
        description: "search query project",
        link: "mygithub"
    },
    {
        title: "API",
        description: "coding a server + website for a user to view different datasets in chart and graph format",
        link: "mygithub"
    },
    {
        title: "To do",
        description: "to complete",
        link: "mygithub"
    },
    {
        title: "To add",
        description: "to complete",
        link: "mygithub"
    },
    {
        title: "To add",
        description: "to complete",
        link: "mygithub"
    }
]

export function SelectProject({setSelectedProject, projects}: SelectInputProps) {
    
    function handleSelect(inputProject: string) {
        const selectedProject = projectList.find((p) => p.title == inputProject)
        if (selectedProject) {
            setSelectedProject(selectedProject)
        }
        else {
            throw new Error("Selected table does not exist")
        }
    }
    return (
        <ul className="project-containers mt-2 space-y-2">
            {projects.map((project) => (
         <li 
            key={project.title} 
            className="cursor-pointer p-2 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={() => handleSelect(project.title)}
        >
            {project.title}
        </li>
        ))}
    </ul>
    )
}