import Image from "next/image"
import homepagePreview from '../../public/homepage_preview.png'

export default function Info() {
    const aboutMe = [
        { text: 'Detail-oriented software engineer with a proven track record of designing and implementing robust and reusable solutions.', color: 'text-white' },
        { text: 'Co-founded a FinTech startup in college as technical lead and sole backend/infrastructure engineer.', color: 'text-white' },
        { text: 'I love learning new technologies, and already have extensive experience in cloud technologies and orchestration, Python, Go, JavaScript, and C++.', color: 'text-white' },
        { text: 'Currently interested in full-stack, backend, or infrastructure engineering roles.', color: 'text-white' },
        { text: 'Other interesting facts: I love playing video games (LoL, CS:GO, BG3, etc.), powerlifting (115/110/157.5 @ 67.5kg in meet), and cooking!', color: 'text-white' }]

    return (
        <main className="flex min-h-screen flex-col items-center p-8 sm:p-24">
            <div className='flex justify-center flex-col py-8 sm:py-0'>
                <h1 className="text-4xl font-bold text-center">
                    Nicolas Patil
                </h1>
                <h3 className="text-xl text-center text-gray-200">
                    @nicksterp
                </h3>
            </div>
            {/*About section: same as about_me in fileTree*/}
            <div className='flex justify-center flex-col w-full md:w-4/6 p-4 space-y-2'>
                <h1 className="text-xl font-bold">
                    About Me
                </h1>
                <p>
                    Detail-oriented software engineer with a proven track record of designing and implementing robust and reusable solutions.
                    Co-founded a FinTech startup in college as technical lead and sole backend/infrastructure engineer.
                </p>
                <div className="flex justify-center place-items-center space-evenly text-center py-1">
                    <a href='/resume.pdf' className='grow font-medium text-blue-500 hover:underline'>Resume</a>
                    <a href='https://www.linkedin.com/in/nicolaspatil/' className='grow font-medium text-blue-500 hover:underline'>LinkedIn</a>
                    <a href='https://github.com/nicksterp' className='grow font-medium text-blue-500 hover:underline'>Github</a>
                </div>
            </div>
            {/* Projects: Tiling previews + titles + short descriptions */}
            <div className='flex justify-center flex-col w-full p-4 space-y-2'>
                <div className="w-full">
                    <h1 className="text-xl font-bold text-center">
                        Projects
                    </h1>
                </div>
                <div className='flex justify-center w-full md:max-w-[40%] p-4 space-y-2'>
                    <a
                        href='/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 rounded-lg border hover:border-blue-500 hover:shadow-lg transition-all"
                    >
                        <div className="relative mb-2 overflow-hidden rounded-lg  border-white border shadow-white">
                            <Image src={homepagePreview} alt='website preview' />
                        </div>
                        <h3 className="mb-2 font-semibold group-hover:text-blue-500">
                            Terminal Emulator
                        </h3>
                        <p className="text-gray-500 text-sm">A simple web-based terminal emulator supporting essential read commands and file tree traversal.</p>
                    </a>
                </div>
            </div>
        </main >
    )
}