import File from "../entities/File";

// This is a mock service 
/** @see DirectoryService for detailed explanation */ 

class FileService {

    fileList1 = [
    ];

    fileList2 = [
        new File(1, 'successful_sample_project.docx'),
        new File(2, 'Howl by Alan Ginsberg.pdf'),
        new File(3, 'The Great Gatsby by F Scott Fitzgerald.pdf'),
    ];

    fileList3 = [
        new File(4, 'Belize-sunset.jpg'),
        new File(5, 'Corgi butt.jpg'),
    ];

    fileList4 = [
        new File(6, 'Metallica-master-of-puppets-live.mp4'),
    ];

    fileList5 = [
    ];

    fileList6 = [
        new File(7, 'Nakatomi_Plaza.bmp'),
    ];

    fileList7 = [
        new File(8, "Star Wars - Galaxy's Edge park brochure.pdf"),
    ];

    fileList8 = [
        new File(9, "dat-boi.png"),
        new File(10, "roman-empire.jpg"),
        new File(11, "spirit-halloween-software-engineer-costume.jpg"),
    ];

    fileList9 = [
        new File(12, "SmartLock.exe"),
    ];

    /**
     * Gets all files in a directory.
     * @param directoryId 
     * @returns 
     */
    getFiles(directoryId: number) {
        switch(directoryId) {
            case 1: {
                return this.fileList1;
                break;
            }
            case 2: {
                return this.fileList2;
                break;
            }
            case 3: {
                return this.fileList3;
                break;
            }
            case 4: {
                return this.fileList4;
                break;
            }
            case 5: {
                return this.fileList5;
                break;
            }
            case 6: {
                return this.fileList6;
                break;
            }
            case 7: {
                return this.fileList7;
                break;
            }
            case 8: {
                return this.fileList8;
                break;
            }
            case 9: {
                return this.fileList9;
                break;
            }
            default: {
                return this.fileList1;
                break;
            }
        }
    }

    /**
     * Lookup the ID of a File by name.
     * FUTURE IMPROVEMENT: Stop working with IDs, you defined entity classes for a reason. 
     * These lookup methods should not just return the ID, but the entire entity.
     * @param name 
     * @returns 
     */
    static lookupFileIdByName(name: string) {
        switch(name) {
            case "successful_sample_project.docx": {
                return 1;
                break;
            }
            case "Howl by Alan Ginsberg.pdf": {
                return 2;
                break;
            }
            case "The Great Gatsby by F Scott Fitzgerald.pdf": {
                return 3;
                break;
            }
            case "Belize-sunset.jpg": {
                return 4;
                break;
            }
            case "Corgi butt.jpg": {
                return 5;
                break;
            }
            case "Metallica-master-of-puppets-live.mp4": {
                return 6;
                break;
            }
            case "Nakatomi_Plaza.bmp": {
                return 7;
                break;
            }
            case "Star Wars - Galaxy's Edge park brochure.pdf": {
                return 8;
                break;
            }
            case "dat-boi.png": {
                return 9;
                break;
            }
            case "roman-empire.jpg": {
                return 10;
                break;
            }
            case "spirit-halloween-software-engineer-costume.jpg": {
                return 11;
                break;
            }
            case "SmartLock.exe": {
                return 12;
                break;
            }
            default: {
                return -1;
                break;
            }
        }
    }

    /**
     * Remove (hard delete) a file.
     * @param id 
     */
    public removeFile(id: number): void {
        if(id == 1 || id == 2 || id == 3) {
            let newList = this.fileList2.filter((item) => item.id !== id);
            this.fileList2 = newList;
        } else if(id == 4 || id == 5) {
            let newList = this.fileList3.filter((item) => item.id !== id);
            this.fileList3 = newList;
        } else if (id  == 6) {
            let newList = this.fileList4.filter((item) => item.id !== id);
            this.fileList4 = newList;
        } else if (id == 7) {
            let newList = this.fileList6.filter((item) => item.id !== id);
            this.fileList6 = newList;
        } else if (id == 8) {
            let newList = this.fileList7.filter((item) => item.id !== id);
            this.fileList7 = newList;
        } else if (id == 9 || id == 10 || id == 11) {
            let newList = this.fileList8.filter((item) => item.id !== id);
            this.fileList8 = newList;
        } else if (id  == 12) {
            let newList = this.fileList9.filter((item) => item.id !== id);
            this.fileList9 = newList;
        }
    }
}

export default FileService