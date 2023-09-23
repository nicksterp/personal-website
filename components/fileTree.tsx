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

export const resume: File = {
    parent: rootFolder,
    name: 'resume.txt',
    contentType: 'text',
    content: 'Want to download my resume? Run the following command:\n\nwget https://nicolaspatil.com/resume.txt\n\n'
}