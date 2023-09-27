import { TextOutput, currentFolderSetter } from '@/components/terminalLogic'
import { Folder, File } from '@/components/fileTree'

export interface Command {
    (args: string[], currentFolder: Folder, currentFolderSetter: (currentFolderSetter | void)): TextOutput[]
}

export const commands: Record<string, Command> = {
    // 'cat': (args: string[]): TextOutput[] => { },
    'cat': (args: string[], currentFolder: Folder): TextOutput[] => {

        // Check if valid number of arguments
        if (args.length != 1) {
            return (
                [
                    { text: 'cat: ', color: 'text-red-400' },
                    { text: 'invalid number of arguments: cat takes 1 argument\n', color: 'text-white' }
                ]
            )
        }

        if (currentFolder.children.find((child) => child.name == args[0])) {
            const file = currentFolder.children.find((child) => child.name == args[0]) as File;
            // Check if type of file is File
            if (!file.content) {
                return [{ text: `cat: ${args[0]}: `, color: 'text-red-400' }, { text: 'is a directory\n', color: 'text-white' }]
            } else {
                return [{ text: `cat: ${args[0]}:\n`, color: 'text-green-400' }, ...file.content]
            }
        }

        return (
            [
                {
                    text: `cat: ${args[0]
                        }: `, color: 'text-red-400'
                },
                { text: 'No such file\n', color: 'text-white' }
            ]
        )
    },
    'ls': (args: string[], currentFolder: Folder): TextOutput[] => {
        if (args.length > 0) {
            const folder = currentFolder.children.find((child) => child.name === args[0] && 'children' in child) as Folder;
            if (folder) {
                return (
                    folder.children.map((child) => {
                        if ('children' in child) {
                            return (
                                [
                                    { text: `\t${child.name}\n`, color: 'text-blue-400' }
                                ]
                            )
                        }
                        else {
                            return (
                                [
                                    { text: `\t${child.name} \n`, color: 'text-white' }
                                ]
                            )
                        }
                    }).reduce((a, b) => a.concat(b), [{ text: `ls ${args[0]} \n`, color: 'text-green-400' }])
                )
            }
            else {
                return (
                    [
                        { text: `ls: ${args[0]}: No such file or directory\n`, color: 'text-red-400' }
                    ]
                )
            }
        }
        return (
            // Read currentFolder.children and return children,
            // where Folder objects are blue and File objects are white
            currentFolder.children.map((child) => {
                if ('children' in child) {
                    return (
                        [
                            { text: `\t${child.name} \n`, color: 'text-blue-400' }
                        ]
                    )
                }
                else {
                    return (
                        [
                            { text: `\t${child.name} \n`, color: 'text-white' }
                        ]
                    )
                }
            }).reduce((a, b) => a.concat(b), [{ text: `ls\n`, color: 'text-green-400' }])
        )
    },
    'cd': (args: string[], currentFolder: Folder, setCurrentFolder: currentFolderSetter): TextOutput[] => {
        if (args.length != 1) {
            return (
                [
                    { text: 'cd: ', color: 'text-red-400' },
                    { text: 'missing operand\n', color: 'text-white' }
                ]
            )
        }
        if (args[0] == '..') {
            if (currentFolder.parent) {
                return (
                    [
                        { text: 'cd ..', color: 'text-white' }
                    ]
                )
            }
            else {
                return (
                    [
                        { text: 'cd: ', color: 'text-red-400' },
                        { text: 'cannot go up from root directory\n', color: 'text-white' }
                    ]
                )
            }
        }
        const folder = currentFolder.children.find((child) => child.name == args[0])
        if (folder && 'children' in folder) {
            const folder = currentFolder.children.find((child) => child.name == args[0]) as Folder;
            // set currentFolder to folder
            setCurrentFolder(folder);
            return (
                [
                    { text: `cd ${args[0]} \n`, color: 'text-white' }
                ]
            )
        }
        else {
            return (
                [
                    { text: 'cd: ', color: 'text-red-400' },
                    {
                        text: `${args[0]
                            }: argument must be a folder\n`, color: 'text-white'
                    }
                ]
            )
        }
    },
    //'clear': (args: string[]): TextOutput[] => { },
    'clear': (args: string[]): TextOutput[] => {
        return (
            []
        )
    },
    //'help': (args: string[]): TextOutput[] => { },
    'help': (args: string[]): TextOutput[] => {
        const commandHelp: Record<string, string> = {
            'cat': 'cat [file]\n\tPrint the contents of [file] to the terminal\n',
            'cd': 'cd [directory]\n\tChange the current directory to [directory]\n',
            'clear': 'clear\n\tClear the terminal\n',
            'help': 'help [command]\n\tPrint help for [command]\n',
            'ls': 'ls [directory: optional]\n\tList the contents of [directory]\n',
            'wget': 'wget [url]\n\tDownload the file at [url]\n',
        }
        if (args.length == 0) {
            return (
                [
                    { text: 'Available commands:\n', color: 'text-white' },
                    { text: '\tcat\n', color: 'text-green-400' },
                    { text: '\tcd\n', color: 'text-green-400' },
                    { text: '\tclear\n', color: 'text-green-400' },
                    { text: '\thelp\n', color: 'text-green-400' },
                    { text: '\tls\n', color: 'text-green-400' },
                    { text: '\twget\n', color: 'text-green-400' },
                ]
            )
        } else {
            // Check if valid number of arguments
            if (args.length != 1) {
                return (
                    [
                        { text: 'help: ', color: 'text-red-400' },
                        { text: 'invalid number of arguments: help takes 0 or 1 arguments\n', color: 'text-white' }
                    ]
                )
            }

            // Find args[0] in commands
            if (args[0] in commandHelp) {
                return (
                    [
                        { text: `${args[0]}: `, color: 'text-green-400' },
                        { text: `${commandHelp[args[0]]} \n`, color: 'text-white' }
                    ]
                )

            } else {
                return (
                    [
                        { text: `help: ${args[0]}: `, color: 'text-red-400' },
                        { text: 'command not found\n', color: 'text-white' }
                    ]
                )
            }
        }
    },
    //'wget': (args: string[]): TextOutput[] => { },
    'wget': (args: string[]): TextOutput[] => {
        if (args.length != 1) {
            return (
                [
                    { text: 'wget: ', color: 'text-red-400' },
                    { text: 'missing operand\n', color: 'text-white' }
                ]
            )
        }
        return (
            [
                { text: `wget: `, color: 'text-red-400' },
                { text: `${args[0]} `, color: 'text-white' },
                { text: ` not found\n`, color: 'text-red-400' },
            ]
        )
    },
}