'use client'

import React, { useState, useRef, useEffect } from 'react';
import { parseInput } from '@/components/terminalLogic';
import { rootFolder } from '@/components/fileTree';
import { commands } from '@/components/commands';

interface TerminalProps {
    // Props go here
}

const Terminal: React.FC<TerminalProps> = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { text: 'Welcome to my website!\n', color: ' font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient' },
        { text: 'To begin, try typing\n', color: 'text-white' },
        { text: 'cat README.txt\n', color: 'text-white font-bold' },
        { text: '(tip: use tab to autocomplete)\n', color: 'text-xs text-gray-400' }
    ]);
    const [currentFolder, setCurrentFolder] = useState(rootFolder);
    // Stack to represent command history
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [commandHistoryIndex, setCommandHistoryIndex] = useState<number>(0)
    const preRef = useRef<HTMLPreElement>(null);
    const isMobile = window.innerWidth < 640;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const commandOutput = parseInput(input, currentFolder, setCurrentFolder);

        const isScrolledToBottom = preRef.current && preRef.current.scrollHeight - preRef.current.scrollTop === preRef.current.clientHeight;

        // Handle 'clear': empty commandOutput
        if (commandOutput.length == 0) {
            setOutput([]);
        }
        // Handle 'wget':
        if (commandOutput[0].text == 'wget: ') {
            // Handle 'wget':
            if (commandOutput[1].text == 'resume.pdf') {
                window.location.href = '/resume.pdf';
            }
            else {
                setOutput([...output, ...commandOutput]);
            }
        }
        else {
            setOutput([...output, ...commandOutput]);
        }


        if (isScrolledToBottom) {
            preRef.current?.scrollTo({ top: preRef.current?.scrollHeight });
        }
        // Add input to command history
        if (input != '') {
            setCommandHistory([...commandHistory, input]);
            setCommandHistoryIndex(commandHistory.length);
        }

        setInput('');
    };

    useEffect(() => {
        // Scroll to bottom of output when it changes
        preRef.current?.scrollTo({ top: preRef.current?.scrollHeight });
    }, [output]);

    const handleInputKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Up arrow: next most recent command
        if (event.key == 'ArrowUp' && !event.repeat) {
            if (commandHistoryIndex > 0) {
                setCommandHistoryIndex(commandHistoryIndex - 1);
                setInput(commandHistory[commandHistoryIndex]);
            }
            else if (commandHistoryIndex == 0) {
                setInput(commandHistory[commandHistoryIndex]);
            }
            else {
                return;
            }
        }
        // Down arrow: next least recent command
        if (event.key == 'ArrowDown' && !event.repeat) {
            if (commandHistoryIndex < commandHistory.length - 1) {
                setCommandHistoryIndex(commandHistoryIndex + 1);
                setInput(commandHistory[commandHistoryIndex + 1]);
            }
            else if (commandHistoryIndex == commandHistory.length - 1) {
                setInput(commandHistory[commandHistoryIndex]);
            }
        }
    }

    const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Prevent Tab key from escaping input field
        if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            // Get last word of input
            const lastWord = input.split(' ').slice(-1)[0];
            // Get list of possible completions (children of current folder that start with last word and commands that start with last word)
            const possibleCompletions = currentFolder.children.map((child) => child.name).filter((name) => name.startsWith(lastWord))
                .concat(Object.keys(commands).filter((command) => command.startsWith(lastWord)));
            // If there is only one possible completion, autocomplete
            if (possibleCompletions.length == 1) {
                // Get index of last word in input
                const lastWordIndex = input.lastIndexOf(lastWord);
                // Autocomplete
                setInput(input.slice(0, lastWordIndex) + possibleCompletions[0]);
            }
            // If there are multiple possible completions, print them
            else if (possibleCompletions.length > 1) {
                setOutput([...output, ...possibleCompletions.map((completion) => ({ text: completion + ' ', color: 'text-green-400' })), { text: '\n', color: 'text-white' }]);
            };
        }
    }

    return (
        <div className="bg-black text-white font-mono p-4 rounded-lg border-white border-2 w-11/12 sm:w-full mx-auto h-[40vh]">
            <div className="mb-2 h-[90%] overflow-y-auto">
                <pre className="text-green-400 max-h-full overflow-y-auto whitespace-pre-wrap" ref={preRef}>
                    {output.map((line, index) => (
                        <span key={index} className={line.color}>{line.text}</span>
                    ))}
                </pre>
            </div>
            <form className="flex" onSubmit={handleInputSubmit}>
                <span className="text-green-400 inline-block">$</span>
                <input
                    id='terminal-input'
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    onKeyUp={handleInputKeyUp}
                    className="bg-transparent outline-none border-none ml-1 text-white w-full whitespace-normal"// screensize }
                    autoFocus={isMobile}
                />
            </form>
        </div>
    );
};

export default Terminal;