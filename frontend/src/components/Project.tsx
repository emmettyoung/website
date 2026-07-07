import { useNavigate } from 'react-router-dom';
import { StepBack } from 'lucide-react';
import '../styles/main.css';
import { noncodingProjects, projectList, SelectProject } from './SelectProject';

export default function Project() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">
      <ul className="contact-return-to-home">
        back to home
      </ul>
      <StepBack
        className="back-arrow"
        size={28}
        onClick={() => navigate('/')}
      />
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