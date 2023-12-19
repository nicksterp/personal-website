import { TextOutput } from '@/components/terminal/Terminal';

export interface Folder {
    parent: Folder | null,
    name: string,
    children: (Folder | File)[],
}

export interface File {
    parent: Folder | null,
    name: string,
    contentType: string, // Values: 'text', 'pdf' (more to come)
    content: TextOutput[],
}

export const rootFolder: Folder = {
    parent: null,
    name: 'root',
    children: [],
};

const README: File = {
    parent: rootFolder,
    name: 'README.txt',
    contentType: 'text',
    content: [
        { text: '\nYou made it!\n', color: 'text-white font-bold' },
        { text: 'This website is a terminal emulator that I built using NextJS, React, Typescript, and Tailwind CSS.\n', color: 'text-white' },
        { text: 'You can navigate through the file system using standard Unix commands.\n', color: 'text-white' },
        { text: 'Type \'help\' to see a list of available commands.\n', color: 'text-white' },
        { text: 'I hope you enjoy your stay!\n\n', color: 'text-white' },
    ],
};
rootFolder.children.push(README);

export const aboutFolder: Folder = {
    parent: rootFolder,
    name: 'about',
    children: [],
};
rootFolder.children.push(aboutFolder);

const resume: File = {
    parent: aboutFolder,
    name: 'resume.pdf',
    contentType: 'pdf',
    content: [{ text: 'File type \'pdf\' is not a valid input for \'cat\'. To download, use:\nwget https://nicolaspatil.com/resume.pdf\n', color: 'text-white' }],
};
aboutFolder.children.push(resume);

const links: File = {
    parent: aboutFolder,
    name: 'links.txt',
    contentType: 'text',
    content: [
        { text: 'LinkedIn: https://www.linkedin.com/in/nicolas-patil/\n', color: 'text-white' },
        { text: 'GitHub: https://github.com/nicolaspatil\n', color: 'text-white' },
    ],
};
aboutFolder.children.push(links);

const contact: File = {
    parent: aboutFolder,
    name: 'contact.txt',
    contentType: 'text',
    content: [
        { text: 'You can reach me at nicolas.a.patil@gmail.com\n', color: 'text-white' },
    ],
};
aboutFolder.children.push(contact);

const aboutMe: File = {
    parent: aboutFolder,
    name: 'about_me.txt',
    contentType: 'text',
    content: [
        { text: 'Detail-oriented software engineer with a proven track record of designing and implementing robust and reusable solutions.\n', color: 'text-white' },
        { text: 'Co-founded a FinTech startup in college as technical lead and sole backend/infrastructure engineer.\n', color: 'text-white' },
        { text: 'I love learning new technologies, and already have extensive experience in cloud technologies and orchestration, Python, Go, JavaScript, and C++.\n', color: 'text-white' },
        { text: 'Currently interested in full-stack, backend, or infrastructure engineering roles.\n', color: 'text-white' },
        { text: 'Other interesting facts: I love playing video games (LoL, CS:GO, BG3, etc.), powerlifting (115/110/157.5 @ 67.5kg in meet), and cooking!\n', color: 'text-white' },
    ],
};
aboutFolder.children.push(aboutMe);

const projects: Folder = {
    parent: rootFolder,
    name: 'projects',
    children: [],
};
rootFolder.children.push(projects);

const website: File = {
    parent: projects,
    name: 'website.txt',
    contentType: 'text',
    content: [
        { text: 'Source: https://github.com/nicolaspatil/personal-website\n', color: 'text-white' },
        { text: 'Technologies used:\n\tNextJS, React, Typescript, Tailwind CSS\n', color: 'text-white' },
    ],
};
projects.children.push(website);

const genie: File = {
    parent: projects,
    name: 'genie.txt',
    contentType: 'text',
    content: [
        { text: 'Source: not available due to company dissolution\n', color: 'text-white' },
        { text: 'Technologies used:\n\tBackend: Python, Flask, Docker, AWS (Elastic Beanstalk, Lambda, DynamoDB)\n', color: 'text-white' },
        { text: 'Frontend: NextJS, Typescript, Tailwind CSS\n', color: 'text-white' },
        { text: 'Apps: SwiftUI, Java\n\n', color: 'text-white' },
        { text: 'https://vercel.com/nicolaspatil/geniewebsite/EUaJGP1BtVvjy4ZZqX7UPwZjS8wp\n', color: 'text-white' },
    ],
};
projects.children.push(genie);