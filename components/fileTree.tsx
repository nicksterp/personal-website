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

const resume: File = {
    parent: rootFolder,
    name: 'resume.pdf',
    contentType: 'pdf',
    content: 'Want to download my resume? Run the following command:\n\nwget https://nicolaspatil.com/resume.pdf\n\n'
}
rootFolder.children.push(resume);

const README: File = {
    parent: rootFolder,
    name: 'README.txt',
    contentType: 'text',
    content: 'Welcome to my website!\n\n' +
        'This website is a terminal emulator that I built using NextJS, React and Tailwind CSS.\n\n' +
        'You can navigate through the file system using standard Unix commands.\n\n' +
        'Type \'help\' to see a list of available commands.\n\n' +
        'I hope you enjoy your stay!\n\n'
}
rootFolder.children.push(README);
