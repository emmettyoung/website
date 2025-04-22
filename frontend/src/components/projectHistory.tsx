import '../styles/main.css';
import { projectLayout } from './SelectProject';

interface projectHistoryProps{
    history: projectLayout | null
}
export function ProjectHistory({ history }: projectHistoryProps) {
    return (
        <div className="project-history">
            {history ? (
                <>
                    <h3>{history.title}</h3>
                    <p>{history.description}</p>
                    <a href={history.link} target="_blank" rel="noopener noreferrer">
                        Project Link
                    </a>
                </>
            ) : (
                <p>No project selected</p>
            )}
        </div>
    );
}