import Image from "next/image"

export default function Projects() {
    const projects = [
        {
            title: "Terminal Emulator",
            image: "/terminal.png",
            image_alt: "homepage preview",
            summary: "A simple web-based terminal emulator supporting essential read commands and file tree traversal",
            link: "/"
        },
        {
            title: "Song of the Day/History",
            image: "/history.jpeg",
            image_alt: "song history preview",
            summary: "Go Chi API + Postgres hosted on AWS, intaking Spotify links and storing/returning song data",
            link: "https://github.com/nicksterp/go-music-api"
        }
    ]
    return (
        <div className='flex justify-center flex-col w-full p-4 space-y-2'>
            <div className="w-full">
                <h1 className="text-xl font-bold text-center">
                    Projects
                </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {projects.map((project, index) => (
                    <div key={index} className='p-4 space-y-2'>
                        <a
                            href={project.link}
                            className="group block p-4 rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all"
                        >
                            <div className="mb-2 overflow-hidden rounded-md flex justify-center p-1">
                                <Image width={400} height={200} src={project.image} alt={project.image_alt} />
                            </div>
                            <h3 className="mb-2 font-semibold group-hover:text-blue-500">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{project.summary}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>)
}