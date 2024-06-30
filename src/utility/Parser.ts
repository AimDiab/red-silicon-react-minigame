import DirectoryService from "../services/DirectoryService";
import FileService from "../services/FileService";

// This is my utility class for parsing user inputs, it can have as many methods that manipulate user input as needed
// It can be accessed from anywhere in the application, making it extremely reusable
class Parser {

    /**
     * Parses a change directory command for directory id.
     * @param value 
     * @returns 
     */
    public static parseChangeDirectoryForId(value: string): number {
        // initialize the directory id
        let directoryId = -1;

        // Parse the directory name
        let directoryFullName = Parser.parseArguments(value);
        
        // handle the .. reserved directory up command input
        if(directoryFullName == "..") {
            return 0;
        // otherwise continue parsing the user input for the directory name
        } else {
            // lookup the directory ID by name
            directoryId = DirectoryService.lookupDirectoryIdByName(directoryFullName);
        }

        return directoryId;
    }

    /**
     * Parses a remove command for file id.
     * @param value 
     * @returns 
     */
    public static parseRemoveFileForId(value: string): number {
        let fileFullName = Parser.parseArguments(value);
        let fileId = FileService.lookupFileIdByName(fileFullName);
        return fileId;
    }

    /**
     * Parses a command string for the base command.
     * @param value 
     * @returns 
     */
    public static parseCommand(value: string) {
        const splitInput = value.split(' ');
        return splitInput[0];
    }

    /**
     * Parses a command string for arguments.
     * @param value 
     * @returns 
     */
    private static parseArguments(value: string): string {
        const splitInput = value.split(' ');
        let argumentCount = splitInput.length - 1;
            let argumentsString = '';
            let i = 1;
            while(i <= argumentCount) {
                argumentsString += splitInput[i];
                if(i !== argumentCount) {
                    argumentsString += " ";
                }
                i++;
            }
        return argumentsString;

    }
}

export default Parser