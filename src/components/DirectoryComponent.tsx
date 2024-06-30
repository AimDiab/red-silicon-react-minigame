import { useState } from 'react';
import InputLineComponent from './InputLineComponent';
import DirectoryService from '../services/DirectoryService';
import FileService from '../services/FileService';
import Parser from '../utility/Parser'
import Help from '../utility/Help'
import './DirectoryComponent.css'
import VideoPlayerComponent from './VideoPlayerComponent';

interface Props {
    directoryService: DirectoryService
    fileService: FileService
}

function DirectoryComponent({fileService, directoryService}: Props) {

    // State management for active directory, files and printed output
    // this will cause the Directory component to Reactively update whenever these values change
    const [activeDirectory, setActiveDirectory] = useState(1);
    const [printedOutput, setPrintedOutput] = useState('');
    const [files, setFiles] = useState(fileService.getFiles(activeDirectory));
    const [victory, setVictory] = useState(0);

    // load the directories from their services
    let subDirectories = directoryService.getdirectories(activeDirectory);
    
    /**
     * Validate user input and parse the command if it's valid. 
     * FUTURE IMPROVEMENT: This method is quite complex, can it be relocated or refactored for code readability?
     * 
     * @param value 
     */
    let handleUserInput = (value: string) => {
        // validate the command
        let baseCommand = Parser.parseCommand(value);

        /**
         * CHANGE DIRECTORY
         */
        if(baseCommand == "cd") {
            // call the Parser utility class to handle the change directory(cd) command
            let directoryId = Parser.parseChangeDirectoryForId(value);

            // 0 means the "cd .." was the command and we should go up one directory if possible
            if(directoryId == 0) {
                let parentDirectory = DirectoryService.getParentDirectory(activeDirectory);

                if(parentDirectory !== -1) {
                    setActiveDirectory(parentDirectory);
                    setFiles(fileService.getFiles(parentDirectory));

                    // reset printed output
                    setPrintedOutput("");

                }
            // -1 means an invalid command or directory was submitted after the cd command
            } else if (directoryId == -1) {
                // display help message
                setPrintedOutput(Help.helpMessage);

            // otherwise handle the directory change 
            } else {
                setActiveDirectory(directoryId);
                setFiles(fileService.getFiles(directoryId));

                // reset printed output
                setPrintedOutput("");

            }

        /**
         * REMOVE FILE
         */    
        } else if (baseCommand == "rm")  {
            // find the id of the file
            let removeTargetId = Parser.parseRemoveFileForId(value);
            
            // FUTURE IMPROVEMENT: The Parser calls the service to find the file id, but it doesn't check whether the file
            // belongs to the active directory. Which means you can delete any file in the file system from anywhere at any time.
            // This is obviously undesirable. I would like to add a Directory ID property to File class and check it before
            // calling the service to delete that file. While I'm at it, I should have the service return full Entities instead of
            // IDs. That was definitely what I was intending when I implemented entities instead of JSON objects, but I got 
            // sidetracked when trying to quickly get the services running. I didn't give it too much thought as they are 
            // mock services at the end of the day and a real application would have real services interfacing with a database.
        
            // check that a matching file id was found
            if(removeTargetId !== -1) {
                // tell the service to delete it
                fileService.removeFile(removeTargetId);

                // update the state to refresh the files list reactively
                let updatedFiles = [...fileService.getFiles(activeDirectory)];
                setFiles(updatedFiles);

                // You deleted the correct file and won the game
                if(removeTargetId == 12) {
                    setVictory(1);
                }
            }
            
            // reset printed output
            setPrintedOutput("");

        /**
         * UNRECOGNIZED COMMAND / HELP
         */
        } else {
            // display the help message if the command is unrecognized, same interaction for typing help
            setPrintedOutput(Help.helpMessage);

        }
    }

    return (
        <>
        <div className="directory-container">
            <ul key={activeDirectory}>
                {subDirectories.map((subDirectory) =>
                    <li key={subDirectory.name}>
                        {subDirectory.name}
                    </li>
                )}
                {files.map((file) => 
                    <li key={file.name}>
                        {file.name}
                    </li>
                )}
            </ul>

            {/* FUTURE IMPROVEMENT: surely there's a better way to preserve my line breaks but still reactively update this element
            I would not use this in a production application, I would find the best practice solution */}
            <p dangerouslySetInnerHTML={{ __html: printedOutput }}></p>
            <InputLineComponent onFormSubmit={(command) => handleUserInput(command)}></InputLineComponent>
        </div>
        
        {/* FUTURE IMPROVEMENT: Animate the video player component's entry with a scaling effect to make it look
        like a popup.  */}
        { victory ? <VideoPlayerComponent videoSource="/src/assets/victory.mp4" videoWidth={426} videoHeight={240}></VideoPlayerComponent> : null }
        </>
    );
}

export default DirectoryComponent