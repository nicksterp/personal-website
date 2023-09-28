import { commands } from '@/components/commands';
import { rootFolder, Folder, File } from '@/components/fileTree'

export interface TextOutput {
    text: string,
    color: string,
}

export interface currentFolderSetter {
    (folder: Folder): void
}

export const parseInput = (inputString: string, currentFolder: Folder, setCurrentFolder: currentFolderSetter): TextOutput[] => {

    // Parse input (space separated) into array
    const inputArray = inputString.split(' ');

    if (inputArray[0] in commands) {
        // Run command with all arguments after command as parameter()
        const commandOutput = commands[inputArray[0]](inputArray.slice(1), currentFolder, setCurrentFolder);

        // Return the output
        return commandOutput
    };

    return (
        [
            { text: `${inputArray[0]}: `, color: 'text-red-400' },
            { text: 'command not found\n', color: 'text-white' }
        ]
    )
}