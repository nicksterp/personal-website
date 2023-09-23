'use client'

import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
    // Props go here
}

interface TextOutput {
    text: string,
    color: string,
}

interface Command {
    (args: string[]): TextOutput[]
}

const Terminal: React.FC<TerminalProps> = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { text: 'Welcome to my website!\n', color: 'text-white' },
    ]);
    const preRef = useRef<HTMLPreElement>(null);

    const commands: Record<string, Command> = {
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const commandOutput = parseInput(input);
        console.log(commandOutput)
        setOutput([...output, ...commandOutput]);

        setInput('');
        if (preRef.current) {
            preRef.current.scrollTop = preRef.current.scrollHeight; // Scroll to bottom
        }
    };

    const parseInput = (inputString: string): TextOutput[] => {

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
                { text: `${inputArray[0]}:`, color: 'text-red-400' },
                { text: 'command not found\n', color: 'text-white' }
            ]
        )
    }

    return (
        <div className="bg-black text-white font-mono p-4 rounded-lg border-white border-2 w-11/12 mx-auto h-[40vh]">
            <div className="mb-2 h-[90%] overflow-y-auto">
                <pre className="text-green-400 max-h-full overflow-y-auto" ref={preRef}>
                    {output.map((line, index) => (
                        <span key={index} className={line.color}>{line.text}</span>
                    ))}
                </pre>
            </div>
            <form className="flex" onSubmit={handleInputSubmit}>
                <span className="text-green-400 inline-block">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="bg-transparent outline-none border-none ml-1 text-white w-full"
                    autoFocus
                />
            </form>
        </div>
    );
};

export default Terminal;
