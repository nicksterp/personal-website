# Project Description

This project is a web application built using Next.js, Typescript, NPM. It displays a terminal emulator that supports basic Unix commands. The Unix commands navigate through a file tree that has folders as doubly linked nodes and files as singly linked nodes that only link to their parents. This allows for fast runtimes and navigation, with a single tracker to track which folder the user is currently in. Commands are spoofed using context from the current folder and the "files" created in the fileTree.tsx component.

## Technology

The project is built using the following technologies:

- Next.js
- Typescript
- npm

## File Tree (fileTree.tsx)

The file tree is implemented using doubly linked (parent and children) nodes for folders and singly linked (parent only) nodes for files. The current folder is tracked by a single reference.

## Commands (commands.tsx)

The commands are implemented using a hash table to link the command name to the function that the command represents. For example, `ls` is linked to the `ls` function, which takes in the current folder and returns the contents of the folder in formatted text.

## How to Run Locally

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nicksterp/personal-website`
2. Navigate to the project directory: `cd personal-website`
3. Install the dependencies: `npm install`
4. Run the application: `npm run dev`

You should now be able to access the application at http://localhost:3000/

