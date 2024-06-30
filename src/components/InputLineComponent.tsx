import './InputLineComponent.css'
import { useState } from 'react';

interface Props {
    onFormSubmit(text: string): void;
}

function InputLineComponent({onFormSubmit}: Props) {

const [command, setCommand] = useState("");

    // submit handler, 
    let handleSubmit = (event: any) => {
        // prevent form submission
        event.preventDefault();

        // pass the command state to the parent component using the function defined as a prop
        onFormSubmit(command);

        // clear the input line like a real command line interface would
        setCommand("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={command} onChange={(e) => setCommand(e.target.value)} />
                <button type="submit" value=""></button>
            </form>
        </>
    )
}

export default InputLineComponent