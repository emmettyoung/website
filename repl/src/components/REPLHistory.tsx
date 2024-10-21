import '../styles/main.css';

interface REPLHistoryProps{
    history: string[]
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {props.history.map((command,id) => (<p key={id}>{command}</p>))}
        </div>
    );
}