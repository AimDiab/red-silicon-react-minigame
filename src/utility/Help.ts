/**
 * Utility class containing common messages that the terminal will return.
 */
class Help {
    public static helpMessage = `Your command was not recognized.<br />
    <br />
    You can use the following commands:<br />
    <br />
    cd - Change Directory<br />
    rm - Remove a file<br />
    help - Displays list of commands<br />`;

    public static Commands = [
        "cd",
        "rm",
        "help"
    ];

    // FUTURE IMPROVEMENT: Splitting up the help message into several different pieces 
    // so that when you are using a recognized command like cd but on a file 
    // it could spit out a custom response saying that the filename.ext is not a directory, etc
}

export default Help