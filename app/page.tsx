import Terminal from '@/components/Terminal';
import Link from 'next/link'
import Song from '@/components/music/Song'


import { FaGithub, FaTwitter, FaFileAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center p-8 sm:p-24">
      <div className="w-full flex flex-row items-start">
        <Song />
      </div>
      <div className='flex justify-center flex-col py-8 sm:py-0'>
        <h1 className="text-4xl font-bold text-center">
          Nicolas Patil
        </h1>
        <h3 className="text-xl text-center text-gray-200">
          @nicksterp
        </h3>
      </div>

      <Terminal />

      <a href='/info' className='font-medium text-blue-500 hover:underline'>Just want to see my info?</a>

      <div className="flex justify-center space-x-8 py-8 sm:py-0">
        <a href="https://github.com/nicksterp">
          <FaGithub size={32} />
        </a>
        <Link href="/resume.pdf" locale={false}>
          <FaFileAlt size={32} />
        </Link>
        {/*@ symbol from icons with link to email*/}
        <a href="https://linkedin.com/in/nicolaspatil">
          <FaLinkedin size={32} />
        </a>
      </div>
    </main>
  )
}
