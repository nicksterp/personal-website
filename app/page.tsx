import Terminal from '@/components/Terminal';
import Image from 'next/image'
import Link from 'next/link'


import { FaGithub, FaTwitter, FaFileAlt, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24">
      <div className='flex justify-center flex-col py-8 sm:py-0'>
        <h1 className="text-4xl font-bold text-center">
          Nicolas Patil
        </h1>
        <h3 className="text-xl text-center text-gray-200">
          @nicksterp
        </h3>
      </div>

      <Terminal />

      <div className="flex justify-center space-x-8 py-8 sm:py-0">
        <a href="https://github.com/nicksterp">
          <FaGithub size={32} />
        </a>
        <Link href="/resume.pdf" locale={false}>
          <FaFileAlt size={32} />
        </Link>
        {/*@ symbol from icons with link to email*/}
        <a href="mailto:nicolas.a.patil@gmail.com">
          <FaEnvelope size={32} />
        </a>
      </div>
    </main>
  )
}
