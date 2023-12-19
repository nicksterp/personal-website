import Projects from "@/components/projects/Projects"

export default function Info() {


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
                <div className="flex justify-center place-items-center space-evenly text-center py-1">
                    <a href='/resume.pdf' className='grow font-medium text-blue-500 hover:underline'>Resume</a>
                    <a href='https://www.linkedin.com/in/nicolaspatil/' className='grow font-medium text-blue-500 hover:underline'>LinkedIn</a>
                    <a href='https://github.com/nicksterp' className='grow font-medium text-blue-500 hover:underline'>Github</a>
                </div>
                <h1 className="text-xl font-bold">
                    About Me
                </h1>
                <p className="text-white">
                    Detail-oriented software engineer with a proven track record of designing and implementing robust and reusable solutions.
                    Co-founded a FinTech startup in college as technical lead and sole backend/infrastructure engineer.
                    I love learning new technologies, and already have experience in cloud technologies and orchestration, Python, Go, JavaScript, and C++.
                    Currently interested in full-stack, backend, or infrastructure engineering roles.
                    Other interesting facts: I love playing video games (LoL, CS:GO, BG3, etc.), powerlifting (115/110/157.5 @ 67.5kg in meet), and cooking!
                </p>
            </div>
            <Projects />
        </main >
    )
}