'use client'

import React, { useState, useRef } from 'react';
import { parseInput } from '@/components/terminalLogic';
interface TerminalProps {
    // Props go here
}

const Terminal: React.FC<TerminalProps> = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { text: 'Welcome to my website!\n', color: 'text-white' },
    ]);
    const preRef = useRef<HTMLPreElement>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const commandOutput = parseInput(input);

        // Handle 'clear': empty commandOutput
        if (commandOutput.length == 0) {
            setOutput([]);
        }
        else {
            setOutput([...output, ...commandOutput]);
        }


        setInput('');
        if (preRef.current) {
            preRef.current.scrollTop = preRef.current.scrollHeight; // Scroll to bottom
        }
    };

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
