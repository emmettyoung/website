import { useNavigate } from 'react-router-dom';
import { StepBack } from 'lucide-react';
import '../styles/main.css';
import { noncodingProjects, projectList, SelectProject } from './SelectProject';

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <div
        className="contact-return-to-home"
        onClick={() => navigate("/")}
      >
        <StepBack size={28}/>
        back to home
      </div>
      <ul className="project-header">
        Coding Projects
      </ul>
      <SelectProject projects={projectList} />

      <ul className="project-header">
        Non-Coding Projects
      </ul>
      <SelectProject projects={noncodingProjects} />
    </div>
  );
}