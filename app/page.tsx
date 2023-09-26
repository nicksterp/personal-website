import Terminal from '@/components/Terminal';
import Image from 'next/image'
import Link from 'next/link'


import { FaGithub, FaTwitter, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex justify-center flex-col'>
        <h1 className="text-4xl font-bold text-center">
          Nicolas Patil
        </h1>
        <h3 className="text-xl text-center text-gray-200">
          @nicksterp
        </h3>
      </div>

      <Terminal />

      <div className="flex justify-center space-x-8">
        <a href="https://github.com/nicksterp">
          <FaGithub size={32} />
        </a>
        <Link href="/resume.pdf" locale={false}>
          <FaFileAlt size={32} />
        </Link>
      </div>
    </main>
  )
}
