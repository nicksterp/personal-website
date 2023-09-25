export interface Folder {
    parent: Folder | null,
    name: string,
    children: (Folder | File)[],
}

export interface File {
    parent: Folder | null,
    name: string,
    contentType: string // Values: 'text', 'pdf' (more to come)
    content: string,
}

export const rootFolder: Folder = {
    parent: null,
    name: 'root',
    children: []
}

const README: File = {
    parent: rootFolder,
    name: 'README.txt',
    contentType: 'text',
    content: 'Welcome to my website!\n' +
        'This website is a terminal emulator that I built using NextJS, React, Typescript and Tailwind CSS.\n' +
        'You can navigate through the file system using standard Unix commands.\n' +
        'Type \'help\' to see a list of available commands.\n' +
        'I hope you enjoy your stay!\n\n'
}
rootFolder.children.push(README);

export const aboutFolder: Folder = {
    parent: rootFolder,
    name: 'about',
    children: []
}
rootFolder.children.push(aboutFolder);

const resume: File = {
    parent: aboutFolder,
    name: 'resume.pdf',
    contentType: 'pdf',
    content: 'File type \'pdf\' is not a valid input for \'cat\'. To download, use:\nwget https://nicolaspatil.com/resume.pdf\n'
}
aboutFolder.children.push(resume);

const links: File = {
    parent: aboutFolder,
    name: 'links.txt',
    contentType: 'text',
    content:
        'LinkedIn: https://www.linkedin.com/in/nicolas-patil/\n' +
        'GitHub: https://github.com/nicolaspatil\n'
}
aboutFolder.children.push(links);

const contact: File = {
    parent: aboutFolder,
    name: 'contact.txt',
    contentType: 'text',
    content:
        'You can reach me at nicolas.a.patil@gmail.com\n'
}
aboutFolder.children.push(contact);

const aboutMe: File = {
    parent: aboutFolder,
    name: 'about_me.txt',
    contentType: 'text',
    content:
        'Detail-oriented software engineer with a proven track record of designing and implementing robust and reusable solutions.\n' +
        'Co-founded a FinTech startup in college as technical lead and sole backend/infrastructure engineer.\n' +
        'I love learning new technologies, and already have extensive experience in cloud technologies and orchestration, Python, Go, JavaScript, and C++.' +
        '\n\n Currently interested in fullstack, backend, or infrastructure engineering roles.\n' +
        'Other interesting facts: I love playing videogames (LoL, CS:GO, BG3, etc.), powerlifting (115/110/157.5 @ 67.5kg in meet), and cooking!\n'
}
aboutFolder.children.push(aboutMe);

const projects: Folder = {
    parent: rootFolder,
    name: 'projects',
    children: []
}
rootFolder.children.push(projects);

const website: File = {
    parent: projects,
    name: 'website.txt',
    contentType: 'text',
    content:
        'Source: https://github.com/nicolaspatil/personal-website\n' +
        'Technologies used:\n' +
        '\tNextJS, React, Typescript, Tailwind CSS\n'
}
projects.children.push(website);

const genie: File = {
    parent: projects,
    name: 'genie.txt',
    contentType: 'text',
    content:
        'Source: not available due to company dissolution\n' +
        'Technologies used:\n' +
        '\tBackend: Python, Flask, Docker, AWS (Elastic Beanstalk, Lambda, DynamoDB)\n' +
        '\tFrontend: NextJS, Typescript, Tailwind CSS\n' +
        '\tApps: SwiftUI, Java\n\n' +
        'https://vercel.com/nicolaspatil/geniewebsite/EUaJGP1BtVvjy4ZZqX7UPwZjS8wp\n'
}
projects.children.push(genie);

