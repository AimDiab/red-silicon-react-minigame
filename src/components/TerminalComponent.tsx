import { ReactNode } from "react"
import './TerminalComponent.css'

interface Props {
    children: ReactNode
}

function TerminalComponent({children}: Props) {
    
    // FUTURE IMPROVEMENT: Make Terminal Component draggable to simulate a real GUI experience
    return (
        <>
        <div className="terminal-container">
            <div className="terminal">
                {children}
            </div>
        </div>
        </>
    )
}

export default TerminalComponent