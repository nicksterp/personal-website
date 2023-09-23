import { TextOutput } from '@/components/terminalLogic'

export interface Command {
    (args: string[]): TextOutput[]
}
export const commands: Record<string, Command> = {
    'cat': (args: string[]): TextOutput[] => {

        // Check if valid number of arguments
        if (args.length != 1) {
            return (
                [
                    { text: 'cat: ', color: 'text-red-400' },
                    { text: 'invalid number of arguments: cat takes 1 argument\n', color: 'text-white' }
                ]
            )
        }

        // TODO:
        return [
            { text: 'cat: ', color: 'text-red-400' },
            { text: 'invalid number of arguments\n', color: 'text-white' }
        ]
    },
    'ls': (args: string[]): TextOutput[] => {
        if (args.length > 0) {
            return (
                [
                    { text: 'ls: ', color: 'text-red-400' },
                    { text: 'invalid number of arguments: ls takes 0 arguments\n', color: 'text-white' }
                ]
            )
        }
        return (
            [
                { text: 'resume.txt\n', color: 'text-white' }
            ]
        )
    },
    'cd': (args: string[]): TextOutput[] => {
        if (args.length != 1) {
            return (
                [
                    { text: 'cd: ', color: 'text-red-400' },
                    { text: 'missing operand\n', color: 'text-white' }
                ]
            )
        }
        // TODO: Check if valid directory and implement logic
        return (
            [
                { text: 'cd: ', color: 'text-red-400' },
            ]
        )
    },
    //'clear': (args: string[]): TextOutput[] => { },
    //'help': (args: string[]): TextOutput[] => { },
    //'exit': (args: string[]): TextOutput[] => { },
}