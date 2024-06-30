import Directory from "../entities/Directory";

// This is a mock service that contains all the directories my faux file system has.
// Normally in a real application this service would actually interface with and fetch Directories from the database.

/**
 * NOTE ABOUT HARDCODED DATA
 * I hardcoded everything in my services because with the limited time I did not want to spend any architecting an elegant solution
 * for a piece of the application that would be handled by a database. 
 * I chose to focus my effort on designing the core gameplay loop instead.
 */

class DirectoryService {

    // Defining all directories in my faux file system. 
    // I could have used a simple array and indexes as IDs but since directories are a core entity in my domain driven design, 
    // I hypothetically anticipate their complexity to be built upon in the future.
    directoryList1: Directory[] = [
        new Directory(2, 'My Documents'),
        new Directory(3, 'My Pictures'),
        new Directory(4, 'My Videos'),
        new Directory(5, 'AppData'),
    ];

    directoryList2: Directory[] = [
        new Directory(1, '..'),
        new Directory(6, 'Blueprints'),
        new Directory(7, 'Disney World Brochures'),
    ];

    directoryList3: Directory[] = [
        new Directory(1, '..'),
        new Directory(8, 'Memes'),
    ];

    directoryList4: Directory[] = [
        new Directory(1, '..'),
    ];

    directoryList5: Directory[] = [
        new Directory(1, '..'),
        new Directory(9, 'SmartLock'),
    ];

    directoryList6: Directory[] = [
        new Directory(1, '..'),
    ];

    directoryList7: Directory[] = [
        new Directory(1, '..'),
    ];

    directoryList8: Directory[] = [
        new Directory(1, '..'),
    ];

    directoryList9: Directory[] = [
        new Directory(1, '..'),
    ];

    /**
     *  Get all subdirectories for a directory.
     * @param id 
     * @returns 
     */
    getdirectories(id: number)
    {
        switch(id) {
            case 1: {
                return this.directoryList1;
                break;
            }
            case 2: {
                return this.directoryList2;
                break;
            }
            case 3: {
                return this.directoryList3;
                break;
            }
            case 4: {
                return this.directoryList4;
                break;
            }
            case 5: {
                return this.directoryList5;
                break;
            }
            case 6: {
                return this.directoryList6;
                break;
            }
            case 7: {
                return this.directoryList7;
                break;
            }
            case 8: {
                return this.directoryList8;
                break;
            }
            case 9: {
                return this.directoryList9;
                break;
            }

            default: {
                return this.directoryList1;
                break;
            }
        }
        
    }
    
    /**
     * Lookup the ID of a directory by name.
     * @param name 
     * @returns 
     */
    static lookupDirectoryIdByName(name: string) {
        let lowerCasedName = name.toLowerCase();

        switch(lowerCasedName) {
            case "home": {
                return 1;
                break;
            }
            case "my documents": {
                return 2;
                break;
            }
            case "my pictures": {
                return 3;
                break;
            }
            case "my videos": {
                return 4;
                break;
            }
            case "appdata": {
                return 5;
                break;
            }
            case "blueprints": {
                return 6;
                break;
            }
            case "disney world brochures": {
                return 7;
                break;
            }
            case "memes": {
                return 8;
                break;
            }
            case "smartlock": {
                return 9;
                break;
            }
            default: {
                return -1;
                break;
            }
        }
    }

    /**
     * Get the parent directory ID of a given directory ID.
     * @param id 
     * @returns 
     */
    static getParentDirectory(id: number) {
        switch(id) {
            case 1: {
                return -1;
                break;
            }
            case 2: {
                return 1;
                break;
            }
            case 3: {
                return 1;
                break;
            }
            case 4: {
                return 1;
                break;
            }
            case 5: {
                return 1;
                break;
            }
            case 6: {
                return 2;
                break;
            }
            case 7: {
                return 2;
                break;
            }
            case 8: {
                return 3;
                break;
            }
            case 9: {
                return 5;
                break;
            }
            default: {
                return -1;
                break;
            }
        }
    }
}

export default DirectoryService