import { useState } from 'react';
import '../styles/main.css';
import { ProjectHistory } from './projectHistory';
import { projectLayout, projectList, SelectProject } from './SelectProject';

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

export default function Project() {
  const [selectProject, setSelectedProject] = useState<projectLayout | null>(null);

  return (
    <div className="min-h-[95vh] relative">
      <div className="w-full" style={{ width: "100%" }}>
        <div className="select-container" aria-label="Select container">
          <ProjectHistory history={selectProject}/>
        </div>
        <hr />
        <SelectProject setSelectedProject={setSelectedProject} projects={projectList}/>
      </div>
    </div>
  );
}
