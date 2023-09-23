import { Command, commands } from '@/components/commands';

export interface TextOutput {
    text: string,
    color: string,
}

export const parseInput = (inputString: string): TextOutput[] => {

    // Parse input (space separated) into array
    const inputArray = inputString.split(' ');

    if (inputArray[0] in commands) {
        // Run command with all arguments after command as parameter
        const commandOutput = commands[inputArray[0]](inputArray.slice(1));

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